(function(){
    let scene = new THREE.Scene(); 
    const aspectRatio = window.innerWidth / window.innerHeight;
    let camera = new THREE.PerspectiveCamera(75,aspectRatio,0.1,1000); 
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.render(scene,camera);
    
    camera.position.z = 5;
    
    var material = new THREE.MeshBasicMaterial( { wireframe: true } );

 //cubo
    var cube = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ), material );
    scene.add( cube );
//cilindro
    var cylinder = new THREE.Mesh( new THREE.CylinderGeometry( 1, 1, 1, 32 ), material );
    cylinder.position.set( 1.5,1.5, 1 );
    scene.add( cylinder );
//
    var octa = new THREE.Mesh( new THREE.OctahedronGeometry(1,0), material );
    octa.position.set( -2,1.5, 1 );
    scene.add( octa );
//esfera
    var sphere = new THREE.Mesh( new THREE.SphereGeometry( 1, 32, 32 ), material );
    sphere.position.set( -2,-1, 1 );
    scene.add( sphere );
//
    var icos = new THREE.Mesh( new THREE.IcosahedronGeometry( 1,0 ), material );
    icos.position.set( 1.5,-1, 1 );
    scene.add( icos );

 //luz   
    let pointLight = new THREE.PointLight(0x404040);
    pointLight.position.y = 80;
    scene.add(new THREE.AmbientLight(0x404040));
    scene.add(pointLight);
    
    
    
    function loop(){ 
        requestAnimationFrame(loop);
        cube.rotation.y +=0.01;
        cylinder.rotation.y +=0.01;
        octa.rotation.y +=0.01;
        sphere.rotation.y +=0.01;
        icos.rotation.y +=0.01;
        renderer.render(scene,camera);
    }
    loop();
    
  
   
    })()