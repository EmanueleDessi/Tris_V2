function Player(name, number){

	this.nome = name;
	this.number = number;
}

Player.prototype.GetImg = function(nbox){

	switch(nbox){

		case 'first':

				if(this.number == '1'){

					$('#first').find('img').attr('src', 'assets/WhiteCross.png');
					$('#first').attr('class', 'box using');
				}else{

					$('#first').find('img').attr('src', 'assets/WhiteRing.png');
					$('#first').attr('class', 'box using');
				}
			break;

		case 'second':

				if(this.number == '1'){

					$('#second').find('img').attr('src', 'assets/BlackCross.png');
					$('#second').attr('class', 'box using');
				}else{

					$('#second').find('img').attr('src', 'assets/BlackRing.png');
					$('#second').attr('class', 'box using');
				}
			break;

		case 'third':

				if(this.number == '1'){

					$('#third').find('img').attr('src', 'assets/WhiteCross.png');
					$('#third').attr('class', 'box using');
				}else{

					$('#third').find('img').attr('src', 'assets/WhiteRing.png');
					$('#third').attr('class', 'box using');
				}
			break;

		case 'fourth':

				if(this.number == '1'){

					$('#fourth').find('img').attr('src', 'assets/BlackCross.png');
					$('#fourth').attr('class', 'box using');
				}else{

					$('#fourth').find('img').attr('src', 'assets/BlackRing.png');
					$('#fourth').attr('class', 'box using');
				}
			break;		

		case 'fifth':

				if(this.number == '1'){

					$('#fifth').find('img').attr('src', 'assets/WhiteCross.png');
					$('#fifth').attr('class', 'box using');
				}else{

					$('#fifth').find('img').attr('src', 'assets/WhiteRing.png');
					$('#fifth').attr('class', 'box using');
				}
			break;

		case 'sixth':

				if(this.number == '1'){

					$('#sixth').find('img').attr('src', 'assets/BlackCross.png');
					$('#sixth').attr('class', 'box using');
				}else{

					$('#sixth').find('img').attr('src', 'assets/BlackRing.png');
					$('#sixth').attr('class', 'box using');
				}
			break;

		case 'seventh':

				if(this.number == '1'){

					$('#seventh').find('img').attr('src', 'assets/WhiteCross.png');
					$('#seventh').attr('class', 'box using');
				}else{

					$('#seventh').find('img').attr('src', 'assets/WhiteRing.png');
					$('#seventh').attr('class', 'box using');
				}
			break;

		case 'eighth':

				if(this.number == '1'){

					$('#eighth').find('img').attr('src', 'assets/BlackCross.png');
					$('#eighth').attr('class', 'box using');
				}else{

					$('#eighth').find('img').attr('src', 'assets/BlackRing.png');
					$('#eighth').attr('class', 'box using');
				}
			break;

		case 'ninth':

				if(this.number == '1'){

						$('#ninth').find('img').attr('src', 'assets/WhiteCross.png');
						$('#ninth').attr('class', 'box using');
					}else{

						$('#ninth').find('img').attr('src', 'assets/WhiteRing.png');
						$('#ninth').attr('class', 'box using');
					}
			break;					
	}		
}

Player.prototype.Controller = function(nbox){

	switch(nbox){

		case 'first':

				if(this.number == '1'){//giocatore 1

					//controllo partendo da second
					if($('#second').find('img').attr('src') == 'assets/BlackCross.png'){

						if($('#third').find('img').attr('src') == 'assets/WhiteCross.png'){

							//hai vinto!! creare div vincita con nome giocatore nella pagina html, e qui utilizzare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da fourth
					if($('#fourth').find('img').attr('src') == 'assets/BlackCross.png'){

						if($('#seventh').find('img').attr('src') == 'assets/WhiteCross.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da fifth
					if($('#fifth').find('img').attr('src') == 'assets/WhiteCross.png'){

						if($('#ninth').find('img').attr('src') == 'assets/WhiteCross.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show(); 
						}
					}

				}else{//giocatore 2

					//controllo partendo da second
					if($('#second').find('img').attr('src') == 'assets/BlackRing.png'){

						if($('#third').find('img').attr('src') == 'assets/WhiteRing.png'){

							//hai vinto!! creare div vincita con nome giocatore nella pagina html, e qui utilizzare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da fourth
					if($('#fourth').find('img').attr('src') == 'assets/BlackRing.png'){

						if($('#seventh').find('img').attr('src') == 'assets/WhiteRing.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da fifth
					if($('#fifth').find('img').attr('src') == 'assets/WhiteRing.png'){

						if($('#ninth').find('img').attr('src') == 'assets/WhiteRing.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show(); 
						}
					}
				}
			break;

		case 'second':

				if(this.number == '1'){//primo giocatore

					if($('#fifth').find('img').attr('src') == 'assets/WhiteCross.png'){

						if($('#eighth').find('img').attr('src') == 'assets/BlackCross.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					if($('#first').find('img').attr('src') == 'assets/WhiteCross.png'){

						if($('#third').find('img').attr('src') == 'assets/WhiteCross.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}
				}else{//secondo giocatore

					if($('#fifth').find('img').attr('src') == 'assets/WhiteRing.png'){

						if($('#eighth').find('img').attr('src') == 'assets/BlackRing.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					if($('#first').find('img').attr('src') == 'assets/WhiteRing.png'){

						if($('#third').find('img').attr('src') == 'assets/WhiteRing.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}
				}
			break;

		case 'third':

				if(this.number == '1'){//primo giocatore

					//controllo partendo da second
					if($('#second').find('img').attr('src') == 'assets/BlackCross.png'){

						if($('#first').find('img').attr('src') == 'assets/WhiteCross.png'){

							//hai vinto!! creare div vincita con nome giocatore nella pagina html, e qui utilizzare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da sixth
					if($('#sixth').find('img').attr('src') == 'assets/BlackCross.png'){

						if($('#ninth').find('img').attr('src') == 'assets/WhiteCross.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da fifth
					if($('#fifth').find('img').attr('src') == 'assets/WhiteCross.png'){

						if($('#seventh').find('img').attr('src') == 'assets/WhiteCross.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show(); 
						}
					}
				}else{//secondo giocatore

					//controllo partendo da second
					if($('#second').find('img').attr('src') == 'assets/BlackRing.png'){

						if($('#first').find('img').attr('src') == 'assets/WhiteRing.png'){

							//hai vinto!! creare div vincita con nome giocatore nella pagina html, e qui utilizzare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da sixth
					if($('#sixth').find('img').attr('src') == 'assets/BlackRing.png'){

						if($('#ninth').find('img').attr('src') == 'assets/WhiteRing.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da fifth
					if($('#fifth').find('img').attr('src') == 'assets/WhiteRing.png'){

						if($('#seventh').find('img').attr('src') == 'assets/WhiteRing.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show(); 
						}
					}
				}			
			break;

		case 'fourth':

				if(this.number == '1'){//primo giocatore

					//controllo partendo da fifth
					if($('#fifth').find('img').attr('src') == 'assets/WhiteCross.png'){

						if($('#sixth').find('img').attr('src') == 'assets/BlackCross.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da first
					if($('#first').find('img').attr('src') == 'assets/WhiteCross.png'){

						if($('#seventh').find('img').attr('src') == 'assets/WhiteCross.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}
				}else{//secondo giocatore

					//controllo partendo da fifth
					if($('#fifth').find('img').attr('src') == 'assets/WhiteRing.png'){

						if($('#sixth').find('img').attr('src') == 'assets/BlackRing.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da first
					if($('#first').find('img').attr('src') == 'assets/WhiteRing.png'){

						if($('#seventh').find('img').attr('src') == 'assets/WhiteRing.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}
				}
			break;		

		case 'fifth':

				if(this.number == '1'){//primo giocatore
				
					//controllo partendo da first
					if($('#first').find('img').attr('src') == 'assets/WhiteCross.png'){

						if($('#ninth').find('img').attr('src') == 'assets/WhiteCross.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da second
					if($('#second').find('img').attr('src') == 'assets/BlackCross.png'){

						if($('#eighth').find('img').attr('src') == 'assets/BlackCross.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da Third
					if($('#third').find('img').attr('src') == 'assets/WhiteCross.png'){

						if($('#seventh').find('img').attr('src') == 'assets/WhiteCross.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da fourth
					if($('#fourth').find('img').attr('src') == 'assets/BlackCross.png'){

						if($('#sixth').find('img').attr('src') == 'assets/BlackCross.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}
				}else{//secondo giocatore
				
					//controllo partendo da first
					if($('#first').find('img').attr('src') == 'assets/WhiteRing.png'){

						if($('#ninth').find('img').attr('src') == 'assets/WhiteRing.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da second
					if($('#second').find('img').attr('src') == 'assets/BlackRing.png'){

						if($('#eighth').find('img').attr('src') == 'assets/BlackRing.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da Third
					if($('#third').find('img').attr('src') == 'assets/WhiteRing.png'){

						if($('#seventh').find('img').attr('src') == 'assets/WhiteRing.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da fourth
					if($('#fourth').find('img').attr('src') == 'assets/BlackRing.png'){

						if($('#sixth').find('img').attr('src') == 'assets/BlackRing.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}
				}
			break;

		case 'sixth':

				if(this.number == '1'){//primo giocatore

					//controllo partendo da fifth
					if($('#fifth').find('img').attr('src') == 'assets/WhiteCross.png'){

						if($('#fourth').find('img').attr('src') == 'assets/BlackCross.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da third
					if($('#third').find('img').attr('src') == 'assets/WhiteCross.png'){

						if($('#ninth').find('img').attr('src') == 'assets/WhiteCross.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}
				}else{//secondo giocatore

					//controllo partendo da fifth
					if($('#fifth').find('img').attr('src') == 'assets/WhiteRing.png'){

						if($('#fourth').find('img').attr('src') == 'assets/BlackRing.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da third
					if($('#third').find('img').attr('src') == 'assets/WhiteRing.png'){

						if($('#ninth').find('img').attr('src') == 'assets/WhiteRing.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}
				}
			break;

		case 'seventh':

				if(this.number == '1'){//giocatore 1

					//controllo partendo da eighth
					if($('#eighth').find('img').attr('src') == 'assets/BlackCross.png'){

						if($('#ninth').find('img').attr('src') == 'assets/WhiteCross.png'){

							//hai vinto!! creare div vincita con nome giocatore nella pagina html, e qui utilizzare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da fourth
					if($('#fourth').find('img').attr('src') == 'assets/BlackCross.png'){

						if($('#first').find('img').attr('src') == 'assets/WhiteCross.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da fifth
					if($('#fifth').find('img').attr('src') == 'assets/WhiteCross.png'){

						if($('#third').find('img').attr('src') == 'assets/WhiteCross.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show(); 
						}
					}

				}else{//giocatore 2

					//controllo partendo da eighth
					if($('#eighth').find('img').attr('src') == 'assets/BlackRing.png'){

						if($('#ninth').find('img').attr('src') == 'assets/WhiteRing.png'){

							//hai vinto!! creare div vincita con nome giocatore nella pagina html, e qui utilizzare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da fourth
					if($('#fourth').find('img').attr('src') == 'assets/BlackRing.png'){

						if($('#first').find('img').attr('src') == 'assets/WhiteRing.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da fifth
					if($('#fifth').find('img').attr('src') == 'assets/WhiteRing.png'){

						if($('#third').find('img').attr('src') == 'assets/WhiteRing.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show(); 
						}
					}
				}
			break;

		case 'eighth':
				
				if(this.number == '1'){//primo giocatore

					if($('#fifth').find('img').attr('src') == 'assets/WhiteCross.png'){

						if($('#second').find('img').attr('src') == 'assets/BlackCross.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					if($('#seventh').find('img').attr('src') == 'assets/WhiteCross.png'){

						if($('#ninth').find('img').attr('src') == 'assets/WhiteCross.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}
				}else{//secondo giocatore

					if($('#fifth').find('img').attr('src') == 'assets/WhiteRing.png'){

						if($('#second').find('img').attr('src') == 'assets/BlackRing.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					if($('#seventh').find('img').attr('src') == 'assets/WhiteRing.png'){

						if($('#ninth').find('img').attr('src') == 'assets/WhiteRing.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}
				}
			break;

		case 'ninth':
				
				if(this.number == '1'){//primo giocatore

					//controllo partendo da eighth
					if($('#eighth').find('img').attr('src') == 'assets/BlackCross.png'){

						if($('#seventh').find('img').attr('src') == 'assets/WhiteCross.png'){

							//hai vinto!! creare div vincita con nome giocatore nella pagina html, e qui utilizzare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da sixth
					if($('#sixth').find('img').attr('src') == 'assets/BlackCross.png'){

						if($('#third').find('img').attr('src') == 'assets/WhiteCross.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da fifth
					if($('#fifth').find('img').attr('src') == 'assets/WhiteCross.png'){

						if($('#first').find('img').attr('src') == 'assets/WhiteCross.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show(); 
						}
					}
				}else{//secondo giocatore

					//controllo partendo da eighth
					if($('#eighth').find('img').attr('src') == 'assets/BlackRing.png'){

						if($('#seventh').find('img').attr('src') == 'assets/WhiteRing.png'){

							//hai vinto!! creare div vincita con nome giocatore nella pagina html, e qui utilizzare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da sixth
					if($('#sixth').find('img').attr('src') == 'assets/BlackRing.png'){

						if($('#third').find('img').attr('src') == 'assets/WhiteRing.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show();
						}
					}

					//controllo partendo da fifth
					if($('#fifth').find('img').attr('src') == 'assets/WhiteRing.png'){

						if($('#first').find('img').attr('src') == 'assets/WhiteRing.png'){

							//hai vinto!! fare lo show()
							console.log('hai vinto!!!');
							$('#win').find('h1').append('THE WINNER IS');
							$('#win').find('h2').append('<center><strong>'+this.nome+'</strong></center>');
							$('#container').show(); 
						}
					}
				}
			break;					
	}
}

Player.prototype.Builder = function(){

	var option = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth'];
	var possibility = new Array();
	var y = 0;

	for (var i = 0; i <= 8; i++) {
		
		var app = option[i];

		if($('#'+app).attr('class') === 'box'){//controllo classe

			possibility[y]=app;
			y++;
		}
	}

	return possibility;
}

Player.prototype.Brain = function(){

	var bau = this.Builder();
	console.log(bau);
}

function IsNotUneven(numero)
{
    if (isNaN(numero) == false)
    {
        return (numero %2 == 1 ?  true : false);
    }
    else
    {
        return null;
    }
}