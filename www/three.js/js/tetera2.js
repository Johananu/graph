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
    
    loader.load('public/pato.jpg', function(texture){
        let geometry = new THREE.TetrahedronGeometry(6,0);
        let material = new THREE.MeshBasicMaterial({
            map:texture
        })
    mesh = new THREE.Mesh(geometry,material);
    mesh.position.x = 9;
    mesh.position.y = 9;
    scene.add(mesh);
    })
    
    loader.load('public/pato.jpg', function(texture){
        let geometry = new THREE.CylinderGeometry( 9, 15, 25, 8 );
        let material = new THREE.MeshBasicMaterial({
            map:texture
        })
    mesh = new THREE.Mesh(geometry,material);
    mesh.position.y = 0;
    scene.add(mesh);
    })

    loader.load('public/pato.jpg', function(texture){
        var geometry = new THREE.TorusGeometry( 2,6.6,16,100,3.1);
        let material = new THREE.MeshBasicMaterial({
            map:texture
        })
    mesh = new THREE.Mesh(geometry,material);
   
    mesh.position.y = 13;
    
    scene.add(mesh);
    })
   
    
    function CustomSinCurve( scale ) {
            THREE.Curve.call( this );
            this.scale = ( scale === undefined ) ? 1 : scale; 
        }
        
        CustomSinCurve.prototype = Object.create( THREE.Curve.prototype );
        CustomSinCurve.prototype.constructor = CustomSinCurve;
        CustomSinCurve.prototype.getPoint = function ( t ) {
            var tx = Math.cos( 2 * Math.PI * t );
            var ty = t * 3-  1.5;
            var tz = 0;
        
            return new THREE.Vector3( tx, ty, tz ).multiplyScalar( this.scale );
        };

        
        loader.load('public/pato.jpg', function(texture){
            var path = new CustomSinCurve( 7 );
            
                    var geometry = new THREE.TubeGeometry( path, 20, 2, 8, false );
                    let material = new THREE.MeshBasicMaterial({
                        map:texture
                    })
                    mesh = new THREE.Mesh( geometry, material );
                    mesh.position.x=-16;
                    mesh.position.z=10;
                    scene.add( mesh );
        })
       
        var points = [];
        for ( var i = 0; i < 10; i ++ ) {
            points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
        }
        loader.load('public/porce.jpg', function(texture){
            var path = new CustomSinCurve( 7 );
            
            var geometry = new THREE.LatheGeometry( points );
            let material = new THREE.MeshBasicMaterial({
                            map:texture
                        })
            var lathe = new THREE.Mesh( geometry, material );
            lathe.position.x=-40;
            lathe.position.y=-10;
            lathe.position.z=-10;
            scene.add( lathe );
        })

        var points = [];
        for ( var i = 0; i < 10; i ++ ) {
            points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
        }
        loader.load('public/porce.jpg', function(texture){
            var path = new CustomSinCurve( 7 );
            
            var geometry = new THREE.LatheGeometry( points );
            let material = new THREE.MeshBasicMaterial({
                            map:texture
                        })
            var lathe = new THREE.Mesh( geometry, material );
            lathe.position.x=35;
            lathe.position.y=-10;
            lathe.position.z=-10;
            scene.add( lathe );
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
    
   
    })();