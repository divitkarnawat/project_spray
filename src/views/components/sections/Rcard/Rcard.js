import React, { Component } from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import './Rcard.scss';
import teamCard1 from '../../../../assets/img/mf.jpg';
import teamCard2 from '../../../../assets/img/gg.jpg';
import teamCard3 from '../../../../assets/img/th.jpg';

class Rcard extends Component{
    constructor(props)
    {
        super(props);
    }
  
   
	componentDidMount()
	{
		(function(window) {

			'use strict';
			
			// Helper vars and functions.
			function extend( a, b ) {
			  for( var key in b ) { 
				if( b.hasOwnProperty( key ) ) {
				  a[key] = b[key];
				}
			  }
			  return a;
			}
			
			// from http://www.quirksmode.org/js/events_properties.html#position
			function getMousePos(e) {
			  var posx = 0, posy = 0;
			  if (!e) var e = window.event;
			  if (e.pageX || e.pageY) 	{
				posx = e.pageX;
				posy = e.pageY;
			  }
			  else if (e.clientX || e.clientY) 	{
				posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
				posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
			  }
			  return { x : posx, y : posy }
			}
			
			/**
			 * TiltFx obj.
			 */
			function TiltFx(el, options) {
			  this.DOM = {};
			  this.DOM.el = el;
			  this.options = extend({}, this.options);
			  extend(this.options, options);
			  this._init();
			}
			
			TiltFx.prototype.options = {
			  movement: {
				imgWrapper : {
				  translation : {x: 0, y: 0, z: 0},
				  rotation : {x: -5, y: 5, z: 0},
				  reverseAnimation : {
					duration : 1200,
					easing : 'easeOutElastic',
					elasticity : 600
				  }
				},
				lines : {
				  translation : {x: 10, y: 10, z: [0,10]},
				  reverseAnimation : {
					duration : 1000,
					easing : 'easeOutExpo',
					elasticity : 600
				  }
				},
				caption : {
				  translation : {x: 20, y: 20, z: 0},
				  rotation : {x: 0, y: 0, z: 0},
				  reverseAnimation : {
					duration : 1500,
					easing : 'easeOutElastic',
					elasticity : 600
				  }
				},
				/*
				overlay : {
				  translation : {x: 10, y: 10, z: [0,50]},
				  reverseAnimation : {
					duration : 500,
					easing : 'easeOutExpo'
				  }
				},
				*/
				shine : {
				  translation : {x: 50, y: 50, z: 0},
				  reverseAnimation : {
					duration : 1200,
					easing : 'easeOutElastic',
					elasticity: 600
				  }
				}
			  }
			};
			
			/**
			 * Init.
			 */
			TiltFx.prototype._init = function() {
			  this.DOM.animatable = {};
			  this.DOM.animatable.imgWrapper = this.DOM.el.querySelector('.tilter__figure');
			  this.DOM.animatable.lines = this.DOM.el.querySelector('.tilter__deco--lines');
			  this.DOM.animatable.caption = this.DOM.el.querySelector('.tilter__caption');
			  
			  this.DOM.animatable.shine = this.DOM.el.querySelector('.tilter__deco--shine > div');
			  this._initEvents();
			};
			
			/**
			 * Init/Bind events.
			 */
			TiltFx.prototype._initEvents = function() {
			  var self = this;
			  
			  this.mouseenterFn = function() {
				for(var key in self.DOM.animatable) {
				  window.anime.remove(self.DOM.animatable[key]);
				}
			  };
			  
			  this.mousemoveFn = function(ev) {
				requestAnimationFrame(function() { self._layout(ev); });
			  };
			  
			  this.mouseleaveFn = function(ev) {
				requestAnimationFrame(function() {
				  for(var key in self.DOM.animatable) {
					if( self.options.movement[key] == undefined ) {continue;}
					window.anime({
					  targets: self.DOM.animatable[key],
					  duration: self.options.movement[key].reverseAnimation != undefined ? self.options.movement[key].reverseAnimation.duration || 0 : 1,
					  easing: self.options.movement[key].reverseAnimation != undefined ? self.options.movement[key].reverseAnimation.easing || 'linear' : 'linear',
					  elasticity: self.options.movement[key].reverseAnimation != undefined ? self.options.movement[key].reverseAnimation.elasticity || null : null,
					  scaleX: 1,
					  scaleY: 1,
					  scaleZ: 1,
					  translateX: 0,
					  translateY: 0,
					  translateZ: 0,
					  rotateX: 0,
					  rotateY: 0,
					  rotateZ: 0
					});
				  }
				});
			  };
			
			  this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
			  this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
			  this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
			};
			
			TiltFx.prototype._layout = function(ev) {
			  // Mouse position relative to the document.
			  var mousepos = getMousePos(ev),
				// Document scrolls.
				docScrolls = {left : document.body.scrollLeft + document.documentElement.scrollLeft, top : document.body.scrollTop + document.documentElement.scrollTop},
				bounds = this.DOM.el.getBoundingClientRect(),
				// Mouse position relative to the main element (this.DOM.el).
				relmousepos = { x : mousepos.x - bounds.left - docScrolls.left, y : mousepos.y - bounds.top - docScrolls.top };
			
			  // Movement settings for the animatable elements.
			  for(var key in this.DOM.animatable) {
				if( this.DOM.animatable[key] == undefined || this.options.movement[key] == undefined ) {
				  continue;
				}
				var t = this.options.movement[key] != undefined ? this.options.movement[key].translation || {x:0,y:0,z:0} : {x:0,y:0,z:0},
				  r = this.options.movement[key] != undefined ? this.options.movement[key].rotation || {x:0,y:0,z:0} : {x:0,y:0,z:0},
				  setRange = function (obj) {
					for(var k in obj) {
					  if( obj[k] == undefined ) {
						obj[k] = [0,0];
					  }
					  else if( typeof obj[k] === 'number' ) {
						obj[k] = [-1*obj[k],obj[k]];
					  }
					}
				  };
			
				setRange(t);
				setRange(r);
				
				var transforms = {
				  translation : {
					x: (t.x[1]-t.x[0])/bounds.width*relmousepos.x + t.x[0],
					y: (t.y[1]-t.y[0])/bounds.height*relmousepos.y + t.y[0],
					z: (t.z[1]-t.z[0])/bounds.height*relmousepos.y + t.z[0],
				  },
				  rotation : {
					x: (r.x[1]-r.x[0])/bounds.height*relmousepos.y + r.x[0],
					y: (r.y[1]-r.y[0])/bounds.width*relmousepos.x + r.y[0],
					z: (r.z[1]-r.z[0])/bounds.width*relmousepos.x + r.z[0]
				  }
				};
			
				this.DOM.animatable[key].style.WebkitTransform = this.DOM.animatable[key].style.transform = 'translateX(' + transforms.translation.x + 'px) translateY(' + transforms.translation.y + 'px) translateZ(' + transforms.translation.z + 'px) rotateX(' + transforms.rotation.x + 'deg) rotateY(' + transforms.rotation.y + 'deg) rotateZ(' + transforms.rotation.z + 'deg)';
			  }
			};
			
			window.TiltFx = TiltFx;
			
			})(window);
				
				  (function() {
					var tiltSettings = [
					{},
					{
					  movement: {
						imgWrapper : {
						  translation : {x: 10, y: 10, z: 30},
						  rotation : {x: 0, y: -10, z: 0},
						  reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
						},
						lines : {
						  translation : {x: 10, y: 10, z: [0,70]},
						  rotation : {x: 0, y: 0, z: -2},
						  reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
						},
						caption : {
						  rotation : {x: 0, y: 0, z: 2},
						  reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
						},
						shine : {
						  translation : {x: 100, y: 100, z: 0},
						  reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
						}
					  }
					}];
			  
				
				
					  document.querySelectorAll('a.tilter').forEach(function(el, pos) { 
						
						new window.TiltFx(el, tiltSettings[0]);
						
					  });
			  
				  
				  
				  })();
	}

      
    render()
    {
    
        return(
        <div className="rcard_section">
            <h2 className="title"> TEAM</h2>
			<div className="divider"/>
        <div class="content content--c1">
				
			<Link to={{pathname:"/profile/MFriedmann/"}}><a href="#" className="tilter tilter--1"  data-aos="fade-up">
				<figure className="tilter__figure">
					<img className="tilter__image" src={teamCard1} alt="Michael Friedmann" />
					<div className="tilter__deco tilter__deco--shine"><div></div></div>
					<figcaption className="tilter__caption">
						<h3 className="tilter__title">Michael Friedmann</h3>
						<p className="tilter__description">Geschäftsführender Gesellschafter</p>
					</figcaption>
					<svg className="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
						<path d="M20.5,20.5h260v375h-260V20.5z" />
					</svg>
				</figure>
				</a>
			</Link>
			<Link to={{pathname:"/profile/GGomola"}}><a className="tilter tilter--1"  data-aos="fade-up">
					<figure className="tilter__figure">
						<img className="tilter__image" src={teamCard2} alt="Gunter Gomola" />
						<div className="tilter__deco tilter__deco--shine"><div></div></div>
						<figcaption className="tilter__caption">
							<h3 className="tilter__title">Gunter Gomola</h3>
							<p className="tilter__description">Geschäftsführender Gesellschafter</p>
						</figcaption>
						<svg className="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
							<path d="M20.5,20.5h260v375h-260V20.5z" />
						</svg>
					</figure>
				</a>
				</Link>
			
				<Link to={{pathname:"/profile/THensel"}}><a className="tilter tilter--1"  data-aos="fade-up">
					<figure className="tilter__figure">
						<img className="tilter__image" src={teamCard3} alt=" Thomas Hensel" />
						<div className="tilter__deco tilter__deco--shine"><div></div></div>
						<figcaption className="tilter__caption">
							<h3 className="tilter__title"> Thomas Hensel</h3>
							<p className="tilter__description">Geschäftsführender Gesellschafter</p>
						</figcaption>
						<svg className="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
							<path d="M20.5,20.5h260v375h-260V20.5z" />
						</svg>
					</figure>
				</a>
				</Link>
				

			</div>
		
            </div>
			);
    }

}

export default Rcard;