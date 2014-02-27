/**
 *
 *  @function
 *  @description:   Anonimous function autoexecutable
 *  @params jQuery $.- An jQuery object instance
 *  @params window window.- A Window object Instance
 *  @author: @_Chucho_
 *
 */
(function ( $, window, document, undefined ) {
    
    //  When DOM is loaded
    $( function ( ) {
        
        //  Muestra si hay una capa de carga del sitio
        if ( $( ".loader" ).exists() ) {
            
            $( '.alert_background' ).fadeOut( 300 );
            $( ".loader" ).fadeOut( 300 );
        }
    } );
    
    //  When DOM is ready
    $( document ).on( 'ready', function ( e ) {
        
        //  !Crea una instancia de jQuery Overlay
        if ( $( '.alert_box' ).exists() ) {
            
            GBLanding.doOverlay( $( 'a.alert_trigger' ), {
                effect: 'apple',
                close: $( '.alert_box a.close' ),
                closeOnClick: true,
                closeOnEsc: true, 
                speed: 'normal',
                fixed: false,
                onBeforeLoad: function ( e ) {
                    
                    $( '.alert_background' ).height( '100%' );
                    $( '.alert_box' ).centerWidth();
                    $( '.alert_box' ).centerHeight();
                },
                onLoad: function() {
                    $( '.alert_background' ).fadeIn( 100 );
                },
                onBeforeClose:  function ( ){
                    
                    $( '.alert_box' ).fadeOut( 10, function ( ) {
                        
                        $( '.alert_background' ).fadeOut( 10 );
                        $( '.alert_box h4' ).text( '' );
                        $( '.alert_box p' ).remove( );
                        $( '.alert_box form' ).remove( );
                        $( '.alert_box table' ).remove( );
                        $( '.alert_box div' ).remove( );
                        $( '.alert_box button' ).remove( );
                        $( '.alert_box div.confirm' ).remove( );
                    } );
                },
                onClose: function ( e ) {
                    
                }
            } );
            
            GBLanding.overlay    = $( '.alert_trigger' ).data( 'overlay' );
            
            $( '.alert_background' ).height( $( 'body' ).height() );
        }
        
        //  Crea una instancia de jQuery Overlay para el home de descubreone.mx
        //  Calcula la distancia entre el margen izquierdo para posicionar
        //  la capa del video. Si en menor de 0 (ocurre en iPhone) utiliza 
        //  el ancho del body en vez del ancho de la ventana para hacer 
        //  el cálculo
        if ( $( '.overlay' ).exists() ) {
            
            $( '.overlay' ).centerWidth();
            
            GBLanding.doOverlay( 'img[rel]', {
                effect: 'apple', 
                // custom top position
                //top: 260,
                // some mask tweaks suitable for facebox-looking dialogs
                mask: {
                    // you might also consider a "transparent" color for the mask
                    color: '#FFF',
                    // load mask a little faster
                    loadSpeed: 200,
                    // very transparent
                    opacity: 0.5
                },
                // disable this for modal dialog-type of overlays
                closeOnClick: true,
                closeOnEsc: true, 
                // load it immediately after the construction
                load: true, 
                onBeforeLoad: function ( e ) {
                    
                }, 
                onLoad: function ( e ) {
                   
                    if ( myVideo && myVideo.paused ) {
                        
                        myVideo.play();
                    }
                }, 
                onBeforeClose: function ( e ) {
                    
                    var player;
                    function onYouTubeIframeAPIReady() {
                        
                        player  = new window.YT.Player( 'ytplayer', {
                            events: {
                                'onReady': onPlayerReady,
                                'onStateChange': onPlayerStateChange
                            }
                        });
                    }
                    
                    function onPlayerReady( event ) {
                        
                        event.target.playVideo();
                    }
                    
                    var done = false;
                    function onPlayerStateChange( event ) {
                        
                        if ( event.data == YT.PlayerState.PLAYING ) {
                            
                            stopVideo();
                        }
                    }
                    function stopVideo() {
                        
                        player.stopVideo();
                    }
                }, 
                onClose: function ( e ) {
                    
                    if ( myVideo ) {
                        
                        myVideo.pause();
                    }
                    /*if ( $( '#exposeMask:visible' ).is( ':visible' ) && $( 'object,embed' ).exists() ) {
                        
                        $( 'object,embed' ).css( {
                            display: "none", 
                            opacity: "0", 
                            filter: "alpha(opacity=0)", 
                            visibility: "none"
                        } );
                    }*/
                }
            } );
            
            $( window ).on( {
                resize: function ( e ) {
                    
                    $( '.overlay' ).centerWidth();
                },
                touchstart: function ( e ) {
                    
                    $( '.overlay' ).centerWidth();
                }, 
                touchend: function ( e ) {
                    
                    $( '.overlay' ).centerWidth();
                }
            } );
        }
        
        if ( $( '.scrollable' ).exists() ) {
            
            GBLanding.inicializeCarrousel( '.scrollable', {
                speed: 300, 
                circular: false, 
                keyboard: false, 
                items: '.items',
                next: '.next', 
                prev: '.prev'
            }, {
                activeClass: "active", 
                navi: "", 
                naviItem: "a", 
                indexed: false
            }, {
                steps: 1, 
                interval: 10000, 
                autoplay: false, 
                autopause: false
            } );
            
            var api = $( '.scrollable' ).data( 'scrollable' );
            api.onBeforeSeek( function( event, tabIndex ) {
                
                var myIndex = api.getIndex();
            } );
            
            api.onSeek( function ( event, tabIndex ) { 
                
                var myIndex = api.getIndex();
            } );
        }
        
        //  !Crea una instancia de jQuery Overlay
        if ( $( '.alert_box' ).exists() ) {
            
            GBLanding.doOverlay( $( 'a.alert_trigger' ), {
                effect: 'apple',
                close: $( '.alert_box a.close' ),
                closeOnClick: true,
                closeOnEsc: true,
                speed: 'normal',
                fixed: true,
                onBeforeLoad: function ( e ) {
                    
                    $( '.alert_background' ).height( '100%' );
                    ( $( '.alert_box a.close' ).exists() ) ? true : $( '.alert_box' ).prepend( GBLanding.closer );
                    $( '.alert_box' ).centerWidth();
                    $( '.alert_box' ).centerHeight();
                    ( $( '.alert_box p' ).text() == '' ) ? $( '.alert_box p' ).remove() : false;
                },
                onLoad: function() {
                    $( '.alert_background' ).fadeIn( 100 );
                },
                onBeforeClose:  function ( ){
                    
                    $( '.alert_box' ).fadeOut( 10, function ( ) {
                        
                        $( '.alert_background' ).fadeOut( 10 );
                        $( '.alert_box h2' ).text( '' );
                        $( '.alert_box h4' ).text( '' );
                        ( $( '.alert_box p' ).exists() ) ? $( '.alert_box p' ).remove( ) : false;
                        ( $( '.alert_box form' ).exists() ) ? $( '.alert_box form' ).remove( ) : false;
                        ( $( '.alert_box table' ).exists() ) ? $( '.alert_box table' ).remove( ) : false;
                        ( $( '.alert_box div' ).exists() ) ? $( '.alert_box div' ).remove( ) : false;
                        ( $( '.alert_box button' ).exists() ) ? $( '.alert_box button' ).remove( ) : false;
                        ( $( '.alert_box div.confirm' ).exists() ) ? $( '.alert_box div.confirm' ).remove( ) : false;
                    } );
                },
                onClose: function ( e ) {}
            } );
            
            GBLanding.overlay    = $( '.alert_trigger' ).data( 'overlay' );
            
            //$( '.alert_background' ).height( $( 'body' ).height() );
        }
        
        //  Crea una instancia de jQuery Overlay para el home de descubreone.mx
        //  Calcula la distancia entre el margen izquierdo para posicionar
        //  la capa del video. Si en menor de 0 (ocurre en iPhone) utiliza
        //  el ancho del body en vez del ancho de la ventana para hacer
        //  el cálculo
        if ( $( '.overlay' ).exists() ) {
            
            $( '.overlay' ).centerWidth();
            
            $( window ).on( {
                resize: function ( e ) {
                   
                    $( '.overlay' ).centerWidth();
                },
                touchstart: function ( e ) {
                   
                    $( '.overlay' ).centerWidth();
                },
                touchend: function ( e ) {
                   
                    $( '.overlay' ).centerWidth();
                }
            } );
        }
        
        // Validación de los formularios
        if ( $( 'form' ).exists() ) {
            
            GBLanding.makesUniform( 'input[type="radio"]' );
            
            //  Muestra la información de tipo de alopecia
            $( 'input[type="radio"]' ).on( 'click', function ( e ) {
                
                $( '.browse' ).fadeOut( 300 );
                var _selector;
                
                switch( $( e.currentTarget ).val() ) {
                    case '1': 
                        _selector   = $( '.response.first' );
                        break;
                    case '2':
                        _selector   = $( '.response.second' );
                        break;
                    case '3':
                        _selector   = $( '.response.third' );
                        break;
                    case '3V':
                        _selector   = $( '.response.thirdV' );
                        break;
                    case '4':
                        _selector   = $( '.response.fourth' );
                        break;
                    case '5':
                        _selector   = $( '.response.sixth' );
                        break;
                    case '6':
                        _selector   = $( '.response.seventh' );
                        break;
                }
                _selector.animate( {
                    'left': '0'
                }, 300 );
            } );
            
            var rules   = {
                    budget_name: {
                        required: true
                    },
                    budget_phone: {
                        required:   true,
                        digits:     true,
                        numbers:    true,
                        minlength:  8,
                        maxlength:  15
                    },
                    budget_mail:       {
                        required:   true,
                        email:      true
                    }
                };
            var messages    = {
                    budget_name:        "Por favor, escribe tu nombre",
                    budget_phone:       "Por favor, escribe tu teléfono",
                    budget_mail:        "Por favor, escribe tu email",
                    minlength:          "Por favor, haga su respuesta más amplia.",
                    maxlength:          "Por favor, acorte su respuesta",
                    email:              "Escriba un email válido",
                    number:             "Escriba solo números",
                    digits:             "Escriba solo números"
                }
            
            GBLanding.validateForms( rules, messages );
            console.log( $( '.budget_form' ).data() );
        }
        
        //  Botón de Atrás
        if ( $( '.diagnosis_displayed > a' ).exists() ) {
             
             $( '.diagnosis_displayed > a' ).on( 'click', function ( e ) {
                 e.preventDefault();
                 e.stopPropagation();
                 
                 $( '.browse' ).fadeIn( 300 );
                 $( e.currentTarget ).parents( '.response' ).animate( {
                     'left': '753px'
                 }, 300, function () {
                     
                     $( e.currentTarget ).parent( '.diagnosis_displayed' ).siblings( '.diagnosis_budget' ).removeAttr( 'style' );
                     $( e.currentTarget ).parent( '.diagnosis_displayed' ).parent( 'response' ).removeAttr( 'style' );
                 } );
             } );
        }
        
        //  Botón de "Comienza Ya"
        if ( $( '.promotions_link > a' ).exists() ) {
            
            $( '.promotions_link > a' ).on( 'click', function ( e ) {
                e.preventDefault();
                e.stopPropagation();
                
                $( e.currentTarget ).parents( '.diagnosis_information' ).siblings( '.diagnosis_budget' ).animate( {
                    'right': 0
                }, 300 );
            } );
        }
    } );
    
})( jQuery, window, document );
