(function(){
    let scene = new THREE.Scene(); 
    const aspectRatio = window.innerWidth / window.innerHeight;
    let camera = new THREE.PerspectiveCamera(75,aspectRatio,0.1,100); 
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.render(scene,camera);
    
    camera.position.z = 60;
    camera.position.y = 15;
    
    let mesh;
    let loader = new THREE.TextureLoader();
    
    loader.load('public/sun.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(20,100,100)
        let material = new THREE.MeshBasicMaterial({
            map:texture
        })
    mesh = new THREE.Mesh(geometry,material);
    mesh.position.y = 0;
    scene.add(mesh);    
    })

    loader.load('public/p5.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(5,50,50)
        let material = new THREE.MeshBasicMaterial({
            map:texture
        })
    mesh = new THREE.Mesh(geometry,material);
    mesh.position.x = 5;
    mesh.position.y = 30;
    scene.add(mesh);    
    })

    loader.load('public/p6.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(7,50,50)
        let material = new THREE.MeshBasicMaterial({
            map:texture
        })
    mesh = new THREE.Mesh(geometry,material);
    mesh.position.x = 20;
    mesh.position.y = 20;
    scene.add(mesh);    
    })

    

    loader.load('public/p2.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(10,60,60)
        let material = new THREE.MeshBasicMaterial({
            map:texture
        })
    mesh = new THREE.Mesh(geometry,material);
    mesh.position.x = 40;
    mesh.position.y = 2;
    scene.add(mesh);    
    })

    loader.load('public/p4.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(13,60,60)
        let material = new THREE.MeshBasicMaterial({
            map:texture
        })
    mesh = new THREE.Mesh(geometry,material);
    mesh.position.x = 40;
    mesh.position.y = -24;
    scene.add(mesh);    
    })

    loader.load('public/p3.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(3,40,40)
        let material = new THREE.MeshBasicMaterial({
            map:texture
        })
    mesh = new THREE.Mesh(geometry,material);
    mesh.position.x = -10;
    mesh.position.y = 40;
    scene.add(mesh);    
    })

    loader.load('public/p1.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(3,40,40)
        let material = new THREE.MeshBasicMaterial({
            map:texture
        })
    mesh = new THREE.Mesh(geometry,material);
    mesh.position.x = -20;
    mesh.position.y = 45;
    scene.add(mesh);    
    })

    loader.load('public/img.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(2,40,40)
        let material = new THREE.MeshBasicMaterial({
            map:texture
        })
    mesh = new THREE.Mesh(geometry,material);
    mesh.position.x = -30;
    mesh.position.y = 48;
    scene.add(mesh);    
    })
    
    
    let pointLight = new THREE.PointLight(0x404040);
    pointLight.position.y = 80;
    scene.add(new THREE.AmbientLight(0x404040));
    scene.add(pointLight);
    
    
    
    function loop(){ 
        requestAnimationFrame(loop);
        renderer.render(scene,camera);
    }
    loop();
    
    /*aspect:ancho y largo de la pantalla de la escena, el que ya existe 
    near:cerca
    fov:enfoque y profunidad de nuestra camara 
    far:lejos*/
   
    })(); 