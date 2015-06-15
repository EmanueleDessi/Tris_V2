$(document).ready(function(){

	var mod = '';

	$('.select').click(function(){

		if ($(this).attr('id') == 'Multi'){

			$('#selectMod').hide();
			$('#selectPlayerMulti').show();
		}else{

			$('#selectMod').hide();
			$('#selectPlayerSingle').show();
		}
	});

	$('#playMulti').click(function(){
		
		if($('#1').val() == '' || $('#2').val() == '')
		{

			$('#alert').show();
		}else{

			$('#container2').hide();
		}

		mod = $(this).attr('id');
	});

	$('#playSingle').click(function(){
		
		if($('#unico').val() == '')
		{

			$('#alert').show();
		}else{

			$('#container2').hide();
		}

		mod = $(this).attr('id');
	});

	$('#ok').click(function(){

		$('#alert').hide();
	});

	var i = 1;

	$('.box').click(function(){

		if(mod == 'playMulti'){

			var one = $('#1').val();
			var two = $('#2').val();
			var Player1 = new Player(one, '1');
			var Player2 = new Player(two, '2');

			var Nbox = $(this).attr('id');

			if (IsNotUneven(i) == true){
			    
			   	console.log($(this).attr('class'));
			   	if($(this).attr('class') != 'box using'){

			   		Player1.GetImg(Nbox);
				   	Player1.Controller(Nbox);
			   	}else{

			   		i--;
			   	}    
			}
			else{
			    
				console.log($(this).attr('class'));
			   	if($(this).attr('class') != 'box using'){

					Player2.GetImg(Nbox);
					Player2.Controller(Nbox);
				}else{

			   		i--;
			   	}
			}

			i++;

			if(i == 9){

				$('#win').find('h1').append('GAME IS OVER');
				$('#container').show();
			}

		}else{

			var one = $('#unico').val();
			var two = 'Computer';
			var Player1 = new Player(one, '1');
			var Player2 = new Player(two, '2');

			var Nbox = $(this).attr('id');

			if (IsNotUneven(i) == true){
			    
			   	console.log($(this).attr('class'));
			   	if($(this).attr('class') != 'box using'){

			   		Player1.GetImg(Nbox);
				   	Player1.Controller(Nbox);
			   	}else{

			   		i--;
			   	}    
			}

			Player2.Brain(Nbox);

			i+=2;

			if(i == 9){

				$('#win').find('h1').append('GAME IS OVER');
				$('#container').show();
			}
		}

		
	});

	$('#reload').click(function(){

		chrome.runtime.reload()
	});
});