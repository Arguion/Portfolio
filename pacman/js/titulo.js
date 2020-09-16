class titulo extends Phaser.Scene {
    constructor() {
      super('menu');
    }

    preload(){
        this.load.image('boton1', 'assets/boton1.png');
        this.load.image('boton2', 'assets/boton2.png');
        this.load.image('logo', 'assets/logo.png');
        this.load.image('BG', 'assets/BG.png')
    };

    create(){

        this.add.image(256, 256, 'BG');
        this.add.image(256, 200, 'boton1').setInteractive().on('pointerdown', () => this.level1() );
        this.add.image(256,320, 'boton2').setInteractive().on('pointerdown', () => this.level2() );
        this.add.image(256,80, 'logo');
        this.add.text(120,460, 'Solo andan los botones :(', {fontSize: 20}).setTint(0xffffff).setAlpha(0.8);
    };

    level1(){
       
        this.scene.start('level1');
      }
    

    level2(){
       
          this.scene.start('level2');
        }
      }