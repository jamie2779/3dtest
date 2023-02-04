const informDiv = document.querySelector(".informDiv");
document.addEventListener('scroll',(e)=>{
  console.log(window.scrollY);
  informDiv.style.top = `${-1 * window.scrollY}px`;
})
informDiv.style.top = `${-1 * window.scrollY}px`;








import { GLTFLoader } from 'GLTFLoader';
        import * as THREE from 'three';
        import { OrbitControls } from "https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js";


        let scene = new THREE.Scene();

        let renderer = new THREE.WebGLRenderer({
            antialias:true
        });

        renderer.setSize(window.innerWidth,window.innerHeight);
        document.body.appendChild(renderer.domElement);

        renderer.outputEncoding = THREE.sRGBEncoding;

        let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
        const controls = new OrbitControls( camera, renderer.domElement );
        controls.enableZoom=false;
        camera.position.set(0, 0, 5)


        scene.background = new THREE.Color("White");
        let light = new THREE.DirectionalLight(0xffffff,10);
        scene.add(light);

        let loader = new GLTFLoader();
        loader.load('./models/killerwhale/scene.gltf', function (gltf) {
            scene.add(gltf.scene);
            function animate(){
                requestAnimationFrame(animate)
                gltf.scene.rotation.y += 0.01
                controls.update();
                renderer.render(scene, camera);
            }
            animate();
        });

