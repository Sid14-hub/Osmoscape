/*global osmo:true $:true*/


/*
	*ADD AUTHOUR AND LISCENSE*
*/

'use strict';
export default class {}

window.osmo = window.osmo || {};
/**
 * ------------------------------------------------
 * class:	dataSvg
 * desc:
 * ------------------------------------------------
 */
osmo.dataSvg = class {

	constructor(){
		console.log('osmo.dataSvg - constructor');

		// ----------------
		// Lib
		// ----------------
		this.PAPER = osmo.scroll.PAPER;

		//@private
		this.position;
		this.mousePos;
		this.quality = 'HQ';
		this.scrollWidth;
		this.scrollHeight;
		this.scale;
		this.mainScroll;
		this.backgroundLayer;

		// Methods
		this.init;
		this.update;
		this.mouseMoved;
	}


	/**
	 * ------------------------------------------------
	 * Initalize splash
	 * ------------------------------------------------
	 */
	initSplash(_width){
		//
		console.log('osmo.dataSvg - initSplash');
		//
		// SPLASH
		//
		let raster = new this.PAPER.Raster('splash');
		// Scale the raster
		this.scale = _width/raster.width;
		raster.scale(this.scale);
		// Move the raster to the center of the view
		raster.position = this.PAPER.view.center;
		raster.position.y -= 20;
		//
		// SCROLL TEXT
		//
		let textLoc = new this.PAPER.Point(raster.position.x - raster.width*this.scale/3, raster.position.y + raster.height*this.scale*0.65);
		let text = new this.PAPER.PointText(textLoc);
		text.justification = 'left';
		text.fillColor = '#b97941';
		text.fontFamily = 'Roboto';
		text.fontSize = window.isMobile?'12px':'18px';
		text.content = window.isMobile?'Hold & Scroll to explore':'Scroll to explore';
		let textWidth = text.bounds.width;
		//
		// SCROLL ARROW
		//
		let start = new this.PAPER.Point(textLoc.x + textWidth + 10, textLoc.y - 5);
		let end = new this.PAPER.Point(start.x+(raster.width*this.scale/2)-textWidth, start.y);
		let line = new this.PAPER.Path();
		line.strokeColor = '#b97941';
		line.moveTo(start);
		line.lineTo(end);
		let size = window.isMobile?4:8;
		var triangle = new this.PAPER.Path.RegularPolygon(new this.PAPER.Point(end.x, end.y+(size/4)), 3, size);
		triangle.rotate(90);
		triangle.fillColor = '#b97941';
		//
		//
	}


	/**
	 * ------------------------------------------------
	 * Initalize
	 * ------------------------------------------------
	 */
	init(q){
		this.backgroundLayer = new this.PAPER.Layer();

		//
		console.log('osmo.dataSvg - initStars');
		this.quality = q;
		//
		this.mousePos = this.PAPER.view.center;
		this.position = this.PAPER.view.center;
		//
		if(this.quality == 'High'){
			//
			//HQscroll
			// Create a raster item using the image tag with id=''
			let raster = new this.PAPER.Raster('HQscroll');
			this.mainScroll = raster;
			this.backgroundLayer.addChild(this.mainScroll);
			// Scale the raster
			this.scale = osmo.scroll.paperHeight/raster.height;
			raster.scale(this.scale);
			//
			// Move the raster to the center of the view
			raster.position = this.PAPER.view.center;
			raster.position.x = (osmo.scroll.paperWidth*3/4) + (raster.width*this.scale/2);
			//
			this.scrollWidth = raster.width*this.scale;
			this.scrollHeight = osmo.scroll.paperHeight;
		}else if(this.quality == 'Mobile'){
			//
			//MQscroll
			// Create a raster item using the image tag with id=''
			let raster = new this.PAPER.Raster('MQscroll');
			this.mainScroll = raster;
			this.backgroundLayer.addChild(this.mainScroll);
			// Scale the raster
			this.scale = osmo.scroll.paperHeight/raster.height;
			raster.scale(this.scale);
			// Move the raster to the center of the view
			raster.position = this.PAPER.view.center;
			raster.position.x = (osmo.scroll.paperWidth*3/4) + (raster.width*this.scale/2);
			//
			//
			this.scrollWidth = raster.width*this.scale;
			this.scrollHeight = osmo.scroll.paperHeight;
		}else if(this.quality == 'Retina'){
			//
			//RQscroll
			// Create a raster item using the image tag with id=''
			let raster = new this.PAPER.Raster('RQscroll');
			this.mainScroll = raster;
			this.backgroundLayer.addChild(this.mainScroll);
			// Scale the raster
			this.scale = osmo.scroll.paperHeight/raster.height;
			raster.scale(this.scale);
			//
			// Move the raster to the center of the view
			raster.position = this.PAPER.view.center;
			raster.position.x = (osmo.scroll.paperWidth*3/4) + (raster.width*this.scale/2);
			//
			this.scrollWidth = raster.width*this.scale;
			this.scrollHeight = osmo.scroll.paperHeight;
		}
	}

	/**
	 * ------------------------------------------------
	 * Frame updated
	 * ------------------------------------------------
	 */
	update(event){

	}

	/**
	 * ------------------------------------------------
	 * mouse and keypad interactions
	 * ------------------------------------------------
	 */
	mouseMoved(event){
		this.mousePos = event.point;
	}


};