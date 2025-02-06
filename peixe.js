var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var peixinho;

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe_serio', 'assets/peixes/peixe_serio.png'); 
    this.load.image('barco', 'assets/peixes/barco.png'); 
}
   

function create() {
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);
    this.add.image(650, 500, 'barco').setScale(0.29);
    
    // Criar o peixe e centralizar
    peixinho = this.add.image(400, 300, 'peixe_serio')
        .setOrigin(0.5, 0.5)
        .setFlip(true, false)
        .setScale(0.7); 

   

    // Melhorar o controle do peixe
    this.input.on('pointermove', function (pointer) {
        peixinho.x = pointer.x;
        peixinho.y = pointer.y;
    });
}

function update() {
   
}
