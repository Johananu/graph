(function(){
    let scene = new THREE.Scene(); 
    const aspectRatio = window.innerWidth / window.innerHeight;
    let camera = new THREE.PerspectiveCamera(75,aspectRatio,0.1,100); 
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.render(scene,camera);
    
    camera.position.z = 50;
    camera.position.y = 5;
    
    let mesh;
    let sphere;
    let loader = new THREE.TextureLoader();
    
    loader.load('public/img.jpg', function(texture){
        let geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 )
        let material = new THREE.MeshBasicMaterial({
            map:texture
        })
    mesh = new THREE.Mesh(geometry,material);
    mesh.position.y = 0;
    scene.add(mesh);

    
    })

    
    
    
    let pointLight = new THREE.PointLight(0x404040);
    
    pointLight.position.y = 80;
    
    
    scene.add(new THREE.AmbientLight(0x404040));
    scene.add(pointLight);
    
    
    
    function loop(){ 
        requestAnimationFrame(loop);
        mesh.rotation.y +=0.01;
        mesh.rotation.z +=0.01;
        mesh.rotation.x +=0.01;
        renderer.render(scene,camera);
    }
    loop();
    
    /*aspect:ancho y largo de la pantalla de la escena, el que ya existe 
    near:cerca
    fov:enfoque y profunidad de nuestra camara 
    far:lejos*/
   
    })();