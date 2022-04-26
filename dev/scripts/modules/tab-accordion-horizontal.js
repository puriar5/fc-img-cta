import 'gridtab/gridtab/gridtab.js';




class accordionHorizontal {
    constructor() {
        this.events();
        this.gridInit();
        
    }

    gridInit() {
        
        $('#gridtab-1').gridtab({
            grid:3,
            contentPadding: 0,
            tabPadding:30,
            
            speed:100,
            responsive:[{
                breakpoint: 1024,
                settings:{
                    grid:2,
                    contentPadding: 0
                },
                
            },{
                breakpoint:767,
                settings:{
                    grid:1,
                    contentPadding: 0
                },
                
            }]
        });
         
    }

    resizeEvents() {
        $(window).on('resize', () => {
            this.gridInit();
        });
    }

   

    events() {
        
        this.resizeEvents();
    }
}

export default accordionHorizontal;
new accordionHorizontal();

