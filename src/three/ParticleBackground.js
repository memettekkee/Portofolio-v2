import * as THREE from 'three'

export function initParticleBackground(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
  camera.position.z = 80

  // Particle geometry
  const count = 1800
  const positions = new Float32Array(count * 3)
  const velocities = []

  for (let i = 0; i < count; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 200
    positions[i * 3 + 1] = (Math.random() - 0.5) * 200
    positions[i * 3 + 2] = (Math.random() - 0.5) * 100
    velocities.push({
      x: (Math.random() - 0.5) * 0.04,
      y: (Math.random() - 0.5) * 0.04,
    })
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const material = new THREE.PointsMaterial({
    color: 0x3b82f6,
    size: 0.5,
    transparent: true,
    opacity: 0.7,
    sizeAttenuation: true,
  })

  const particles = new THREE.Points(geometry, material)
  scene.add(particles)

  // Connection lines between nearby particles
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x06b6d4,
    transparent: true,
    opacity: 0.08,
  })

  let animId
  let frameCount = 0

  function animate() {
    animId = requestAnimationFrame(animate)
    frameCount++

    const pos = geometry.attributes.position.array

    for (let i = 0; i < count; i++) {
      pos[i * 3]     += velocities[i].x
      pos[i * 3 + 1] += velocities[i].y

      // Wrap around
      if (pos[i * 3] > 100)  pos[i * 3] = -100
      if (pos[i * 3] < -100) pos[i * 3] = 100
      if (pos[i * 3 + 1] > 100)  pos[i * 3 + 1] = -100
      if (pos[i * 3 + 1] < -100) pos[i * 3 + 1] = 100
    }

    geometry.attributes.position.needsUpdate = true

    // Slow rotation
    particles.rotation.y += 0.0005
    particles.rotation.x += 0.0002

    renderer.render(scene, camera)
  }

  animate()

  function handleResize() {
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }

  window.addEventListener('resize', handleResize)

  return () => {
    cancelAnimationFrame(animId)
    window.removeEventListener('resize', handleResize)
    geometry.dispose()
    material.dispose()
    renderer.dispose()
  }
}
