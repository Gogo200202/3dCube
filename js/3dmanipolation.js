import * as THREE from'three';

import img from "../img/IMG_20230304_125818.jpg"

const renderer = new THREE.WebGLRenderer();

const texteLOder = new THREE.TextureLoader();

renderer.setSize(window.innerWidth/2, window.innerHeight/2);


let a =document.getElementById("3dElement");
a.appendChild(renderer.domElement);


const scene = new THREE.Scene();

const camera= new THREE.PerspectiveCamera(75,(window.innerWidth/2) /(window.innerHeight/2),0.1,1000);

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({map:texteLOder.load(img)});
const box=new THREE.Mesh(boxGeometry,boxMaterial);

camera.position.set(-0.1,0.3,2)
scene.add(box);

renderer.setClearColor(0X6699ff);

function animation (){
    box.rotation.y-=0.01;
    renderer.render(scene,camera);
}


renderer.setAnimationLoop(animation);

window.addEventListener('resize',function(){
 
    camera.aspect =(window.innerWidth/2) /(window.innerHeight/2);
   camera.updateProjectionMatrix();
   renderer.setSize(window.innerWidth/2, window.innerHeight/2);

});


export *  from './3dmanipolation'