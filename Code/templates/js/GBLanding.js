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
    
    var _GBLanding    = window._GBLanding,
    
    // Use the correct document accordingly with window argument (sandbox)
    document    = window.document,
    location    = window.location,
    navigator   = window.navigator,
    
    // Map over GBLanding in case of overwrite
    _GBLanding  = window.GBLanding;
    
    // Define a local copy of GBLanding
    GBLanding   = function() {
        if ( !( this instanceof GBLanding ) ) {
            
            // The GBLanding object is actually just the init constructor 'enhanced'
            return new GBLanding.fn.init();
        }
        return GBLanding.fn.init();
    };
    
    GBLanding.overlay;
    GBLanding.closer;
    GBLanding.radio;
    
    //  Object prototyping
    GBLanding.fn = GBLanding.prototype = {
        /**
         *
         *  @function:  !constructor
         *  @description:   Constructor method
         *  @author: @_Chucho_
         *
         */
        //  Método constructor
        constructor:    GBLanding, 
        /**
         *
         *  @function:  !init
         *  @description:   Inicializer method
         *  @author: @_Chucho_
         *
         */
        //  !Método inicializador
        init:   function ( ) {}, 
        /**
         *
         *  @function:  !makesUniform
         *  @description:   Makes the uniform effect to radius and checkbox
         *  @params jQuery selector.- A jQuery Selector 
         *  @see:   http://uniformjs.com/
         *  @author: @_Chucho_
         *
         */
        //  !Crea un efecto para poder dar estilos a los elementos checkbox, 
        //  radio, file y select
        makesUniform:   function ( selector ) {
            
            _selector       = ( typeof( selector ) == "undefined" ) ? "*" : selector;
            _selector       = ( typeof( _selector ) == "object" ) ? _selector : $( _selector );
            
            _selector.uniform();
        }, 
        /**
         *
         *  @function:  !anchorMenu
         *  @description:   Anchor the menu
         *  @params jQuery selectorToApply.- A jQuery Selector 
         *  @params Object toFix.- An object with css properties to apply to the
         *                         jQuery selector
         *  @params Object toDeFix.- An object with css properties to apply to 
         *                         the jQuery selector
         *  @author: @_Chucho_
         *
         */
        //  !Ancla el menú cuando a una altura determinada mediante css
        anchorMenu: function ( selectorToApply, offsetTop, classToFix, classToDeFix ) {
            
            GBLanding.tool = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            
            _selector       = ( typeof( selector ) == "undefined" ) ? "*" : selector;
            _selector       = ( typeof( _selector ) == "object" ) ? _selector : $( _selector );
            
            _offsetTop      = ( offsetTop == "" ) ? 0 : offsetTop;
            _offsetTop      = ( typeof( _offsetTop ) == "string" ) ? parseInt( _offsetTop ) : ( typeof( _offsetTop ) == "number" ) ? _offsetTop : parseInt( _offsetTop );
            
            _classToFix     = ( typeof( _classToFix ) == "object" ) ? classToFix : {};
            _classToDeFix   = ( typeof( _classToDeFix ) == "object" ) ? classToDeFix : {};
            
            if ( GBLanding.tool >= _offsetTop ) {
                
                _selectorToApply.css( toFix );
            } else {
                
                _selectorToApply.css( toDeFix );
            }
        },
        /**
         *
         *  @function:  !validateContact
         *  @description:   Makes the validation of the contact form
         *  @see:   http://bassistance.de/jquery-plugins/jquery-plugin-validation/ || 
         *          http://docs.jquery.com/Plugins/Validation
         *  @author: @_Chucho_
         *
         */
        //  !Validación del formulario de contacto.
        validateForms:    function ( rule, messages, dataPass ) {
            
            var _rule       = ( typeof( rule ) == 'object' ) ? rule : {};
            var _message    = ( typeof( messages ) == 'object' ) ? messages : {};
            
            /*var formActive  = $( '.diagnosis_budget form' ).validate( { 
                onfocusout: false,
                onclick: true, 
                onkeyup: false,
                onsubmit: true, 
                focusCleanup: true, 
                focusInvalid: false, 
                errorClass: "error", 
                validClass: "valid", 
                errorElement: "label", 
                ignore: "", 
                /*showErrors: function( errorMap, errorList ) {
                    $('#message').empty().removeClass();
                    $("#message").html('<p>Error al ingresar la información.</p><p>Verifique que sus datos están correctos o que no falte ningún dato.</p><p>Por favor, vuelvalo a intentar.</p>');
                    $('#message').addClass('wrong').show('fast', function(){
                        $('#message').show('fast');
                    });
                    this.defaultShowErrors();
                },
                errorPlacement: function(error, element) {
                    error.prependTo( element.parent() );
                },
                //debug:true, 
                rules: _rule,
                messages: _message, 
                highlight: function( element, errorClass, validClass ) {
                    $( element ).parent().addClass( 'error_wrapper' );
                },
                unhighlight: function( element, errorClass ) {
                    $( element ).parent().removeClass( 'error_wrapper' );
                }, 
                submitHandler: function( form ) {
                    // Form submit
                    /*$( form ).ajaxSubmit( {
                        //    Before submitting the form
                        beforeSubmit: function showRequestLogin( arr, form, options ) {
                            console.log( 'ready' );
                            $('.error_indicator').remove();
                            if ( $('textarea' ).val() == "" ) {
                               
                                $('textarea' ).val( 'Ninguno' );
                            }
                        },
                        //  !Function for handle data from server
                        success: function showResponseLogin( responseText, statusText, xhr, form ) {
                            
                            //console.log(responseText.success);
                            responseText    = $.parseJSON( responseText );
                            
                            if( responseText && ( responseText.success == 'true' || responseText.success == true ) ) {
                                
                                $( '.alert_box' ).addClass( 'thank_you_message' );
                                var _title      = 'Gracias';
                                var _markup     = '<p>Nos comunicaremos con usted a la brevedad.</p>';
                                GBLanding.openAlert( _title, _markup );
                                $( 'textarea' ).val( "" );
                                //$( form ).fadeOut( 300 );
                            } else {
                                
                                $( '.alert_box' ).addClass( 'error_message' );
                                var _title  = 'Error';
                                var _markup = '<p>La encuesta no fue procesada correctamente. Por favor, contacta al administrador.</p>';
                                GBLanding.openAlert( _title, _markup );
                            }
                            //GBLanding.smoothScroll( 'body' );
                        },
                        resetForm: false,
                        clearForm: false,
                        //   If something is wrong
                        error: function( jqXHR, textStatus, errorThrown ) {
                            //console.log(textStatus);
                            //console.log(errorThrown);
                            $( '.alert_box' ).addClass( 'error' );
                            var _title  = 'Error';
                            var _markup = '<p>La encuesta no fue procesada correctamente. Por favor, reporta este error al administrador.</p>';
                            GBLanding.openAlert( _title, _markup );
                        },
                        cache: false
                    } );
                }, 
                invalidHandler: function(form, validator) {
                    var errors = validator.numberOfInvalids();
                    if (errors) {
                        var message = errors == 1 ? 'You missed 1 field. It has been highlighted' : 'You missed ' + errors + ' fields. They have been highlighted';
                        $("div#summary").html(message);
                        $("div#summary").show();
                    } else {
                        $("div#summary").hide();
                    }
                }
            } ); */
            
            $.ajax ( 'Code/snippets/dispatcher.php?action=sendBudget', { 
                beforeSend: function ( jqXHR, settings ) {
                            $('.error_indicator').remove();
                            if ( $('textarea' ).val() == "" ) {
                               
                                $('textarea' ).val( 'Ninguno' );
                            }
                        }, 
                cache: false, 
                complete: function ( jqXHR, textStatus ) {}, 
                contentType: "application/x-www-form-urlencoded", 
                converters: { 
                            "* text":       window.String, 
                            "text html":    true, 
                            "text json":    $.parseJSON, 
                            "text xml":     $.parseXML
                        }, 
                data: dataPass, 
                error:  function ( jqXHR, textStatus, errorThrown ) {}, 
                success: function ( responseText, textStatus, jqXHR ) {
                    
                    //console.log(responseText.success);
                    responseText    = $.parseJSON( responseText );
                    
                    if( responseText && ( responseText.success == 'true' || responseText.success == true ) ) {
                        
                        $( '.alert_box' ).addClass( 'thank_you_message' );
                        var _title      = 'Gracias';
                        var _markup     = '<p>Muchas gracias por tu interes en Giovani Bojanini Microinjerto, <br />en breve nos pondremos en contacto contigo.</p>';
                        GBLanding.openAlert( _title, _markup );
                        $( 'textarea' ).val( "" );
                        $( '.budget_form input[type="text"]' ).val( '' );
                        //$( form ).fadeOut( 300 );
                    } else {
                        
                        $( '.alert_box' ).addClass( 'error_message' );
                        var _title  = 'Error';
                        var _markup = '<p>Hubo un error. ¿Podría intentarlo nuevamente?.</p>';
                        GBLanding.openAlert( _title, _markup );
                    }
                    //GBLanding.smoothScroll( 'body' );
                }, 
                type: "POST"
            } );
        }, 
        /**
         *
         *  @function:  doOverlay
         *  @description:  Make and overlay effect
         *  @params jQuery selector.- A jQuery Selector 
         *  @params Object options.- A JSON object with the options to make a 
         *                           target element a jqdock Element
         *  @author: @_Chucho_
         *  @see:   http://jquerytools.org
         *
         */
        //  !Hace un efecto de overlay sobre un elemento determinado
        doOverlay:  function ( selector, options ) {
            var _selector   = ( typeof( selector ) == "string" )? $( selector ) : ( ( typeof( selector ) == "object" )? selector : $( '*' ) );
            var _options    = ( typeof( options )   == "object" )? options : {};
            
            _selector.overlay( _options );
        }, 
        //  !Abre un cuadro de diálogo con un mensaje
        openAlert:  function ( title, markupMessage ) {
            
            var _title      = ( title == "" || title == undefined ) ? "Error" : title;
            var _message    = ( markupMessage == "" || markupMessage == undefined ) ? "<p>Hubo un error inesperado.</p>" : markupMessage;
            
            $( '.alert_box h2' ).text( _title );
            $( '.alert_box' ).append( _message );
            //GBLanding.overlay.load();
            $( '.alert_trigger' ).click( );
            $( '.alert_box' ).centerHeight( );
            $( '.alert_box' ).centerWidth( );
            $( '.alert_background' ).fadeIn( 50, function (  ) {
                
                $( '.alert_box' ).fadeIn( 100 );
            } );
        }, 
        /**
         *
         *  @function:  !closeAlert
         *  @description:   Close an alert box with a message
         *  @see:   http://bassistance.de/jquery-plugins/jquery-plugin-validation/ || 
         *          http://docs.jquery.com/Plugins/Validation
         *  @author: @_Chucho_
         *
         */
        //  !Cierra un cuadro de diálogo con un mensaje
        closeAlert:  function ( ) {
            
            GBLanding.overlay.close();
            /*$( '.alert_box' ).fadeOut( 'fast' );
            $( '.alert_background' ).fadeOut( 'fast' );
            $( '.alert_box h4' ).text( '' );
            $( '.alert_box p' ).remove( );
            $( '.alert_box form' ).remove( );
            $( '.alert_box table' ).remove( );
            $( '.alert_box div' ).remove( );
            $( '.alert_box button' ).remove( );*/
        }, 
        /**
         *
         *  @function:  !smoothScroll
         *  @description:   Do smooth scroll for the anchors in menu
         *  @params jQuery selector.- A jQuery Selector 
         *  @params Number durationInSec.- A number to indicate the duration of 
         *                                 the animation
         *  @see:   http://flesler.blogspot.com/2007/10/jqueryscrollto.html
         *  @author: @_Chucho_
         *
         */
        //  !Realiza el efecto para dar la impresión de scroll "suavizado"
        smoothScroll:   function ( selector, durationInSec ) {
            
            _selector       = ( typeof( selector ) == "undefined" ) ? "*" : selector;
            _selector       = ( typeof( _selector ) == "object" ) ? _selector : ( typeof( _selector ) == "number" ) ? _selector : $( _selector );
            
            _durationInSec  = ( durationInSec == "" ) ? 1000 : durationInSec;
            _durationInSec  = ( typeof( _durationInSec ) == "string" ) ? parseInt( _durationInSec ) : _durationInSec;
            _durationInSec  = ( typeof( _durationInSec ) != "number" ) ? parseInt( _durationInSec ) : _durationInSec;
            
            if ( typeof( _selector ) == "object" ) {
                
                _scrollYOffset  = _selector.offset().top;
                _scrollYOffset  = Math.ceil ( Number( _scrollYOffset ) );
            } else if ( typeof( _selector ) == "number" ) {
                
                _scrollYOffset  = _selector;
            }
            
            $.scrollTo( _scrollYOffset, { 
                duration: _durationInSec, 
                axis: 'y'
            } );
        }, 
        /**
         *
         *  @function:  !toggleValue
         *  @description:   Does toggle if the input have a value or if doesn't
         *  @params jQuery selector.- A jQuery Selector 
         *  @params String valueChange.- A String with the value to change or preserve
         *  @author: @_Chucho_
         *
         */
        //  !Revisa si el valor de un input es el original o no y lo preserva o 
        //  respeta el nuevo valor.
        toggleValue:    function ( selector, valueChange ) {
            
            _selector       = ( typeof( selector ) == "undefined" ) ? "*" : selector;
            _selector       = ( typeof( _selector ) == "object" ) ? _selector : $( _selector );
            
            _valueChange  = ( valueChange == "" ) ? "" : valueChange;
            _valueChange  = ( typeof( _valueChange ) == "string" ) ? _valueChange : ( typeof( _valueChange ) == "number" ) ? parseInt( _valueChange ) : _valueChange;
            
            var _placeholder;
            
            if ( _selector.attr( 'placeholder' ) != undefined ) {
                
                _placeholder = String ( _selector.attr( 'placeholder' ) ).toLowerCase();
            } else {
                
                _placeholder = String ( _selector.val( ) ).toLowerCase();
            }
            
            /*if ( ( _placeholder == "" ) || ( _placeholder == _valueChange ) ) {
                
                _selector.css( { 
                    color: '#aaa'
                } );
            }*/
            
            _selector.on( {
                blur: function ( e ) {
                    
                    _comment = String( $( e.currentTarget ).val() ).toLowerCase();
                    if ( ( _comment == _placeholder ) || ( _comment == "" ) ) {
                        
                        $( e.currentTarget ).val( valueChange );
                        return false;
                    }
                },
                focus: function ( e ) {
                    
                    _comment = String( $( e.currentTarget ).val() ).toLowerCase();
                    if ( _comment == _placeholder ) {
                        
                        $( e.currentTarget ).val( '' );
                        return false;
                    }
                }
            } );
        }, 
        /**
         *
         *  @function:  !toggleClass
         *  @description:   Toggle an HTML class
         *  @params jQuery selector.- A jQuery Selector 
         *  @params String className.- A class to toggle to the target
         *  @author: @_Chucho_
         *
         */
        //  !Hace toggle de una clase a un selector específico
        toggleClass: function ( selector, className ) {
            
            _selector       = ( typeof( selector )  == "undefined" ) ? "*" : selector;
            _selector       = ( typeof( _selector ) == "object" )    ? _selector : $( _selector );
            _class          = ( typeof( className ) == "undefined" ) ? ".active" : className;
            _class          = ( typeof( _class )    == "string" )    ? _class : String( _class );
            
            if ( selector.exists() ) {
                
                _selector.toggleClass( _class );
            }
        }, 
        /**
         *
         *  @function:  !managerTimelineFill
         *  @description:   Carrousel inicializer
         *  @params jQuery slider.- A jQuery Selector 
         *  @params String progressBar.- A class to add to target
         *  @params Object ui.- An object with css properties to apply to the jQuery selector
         *  @params Number leftOffset.- A number to indicate the duration of the animation
         *  @params Number rightOffset.- A number to indicate the duration of the animation
         *  @see:   http://jquerytools.org
         *  @author: @_Chucho_
         *
         */
        //  !Inicializador de un carrusel jQuery Tools
        inicializeCarrousel:    function ( selector, optionsScrollable, optionsNavigator, optionsAutoscroll ) {
            
            _selector       = ( typeof( selector )  == "undefined" ) ? "*" : selector;
            _selector       = ( typeof( _selector ) == "object" )    ? _selector : $( _selector );
            
            if( !optionsScrollable || optionsScrollable == {} ) {
                optionsScrollable = {};
            }
            if( !optionsNavigator || optionsNavigator == {} ) {
                optionsNavigator = {};
            }
            if( !optionsAutoscroll || optionsAutoscroll == {} ) {
                optionsAutoscroll = {};
            }
            
            _selector.scrollable( optionsScrollable ).navigator( optionsNavigator ).autoscroll( optionsAutoscroll );
        },
        getCenterWidth: function ( selector ) {
            
            var winWidth;
            _selector       = ( typeof( selector )  == "undefined" ) ? "*" : selector;
            _selector       = ( typeof( _selector ) == "object" )    ? _selector : $( _selector );
            
            if ( $.browser.msie && $.browser.version == '8.0' ) {
                
                winWidth    = $(window).width() / 2;
            } else {
                
                winWidth    = window.innerWidth / 2;
            }
            
            var elemWidth   = $( _selector ).width() / 2;
            
            if ( parseInt( winWidth - elemWidth ) < 100 ) {
                
                winWidth    = $( 'body' ).innerWidth() / 2;
            }
            
            return elemLeft    = winWidth - elemWidth;
        }
    };
    
    // Give the init function the GBLanding prototype for later instantiation
    GBLanding.fn.init.prototype = GBLanding.fn;
    
    GBLanding = GBLanding.fn;
    
    // Expose GBLanding to the global object
    
    window.GBLanding  = GBLanding;
    
})( jQuery, window, document );
