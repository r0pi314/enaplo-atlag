jQuery(document).ready(function() {
	
		$('.osztalyozo tbody tr:last th').eq(-3).text('<th>Összesitett Átlag: - </th>');
		
	function szamitas(){
		
		var sulyozas = $('#sulyozas').val();

		var jegyert = [];
		switch(sulyozas){
			case "1:1:1:2:2":
				jegyert = [1,1,1,2,2];
			break;
			case "1:1:1:1:2":
				jegyert = [1,1,1,1,2];
			break;
			case "1:2:2:4:4":
				jegyert = [1,2,2,4,4];
			break;
			case "1:2:3:4:5":
				jegyert = [1,2,3,4,5];
			break;
			case "1:5:5:5:5":
				jegyert = [1,5,5,5,5];
			break;
			case "1:1:2:2:2":
				jegyert = [1,1,2,2,2];
			break;
			case "1:1:3:5:7":
				jegyert = [1,1,3,5,7];
			break;
			case "1:2:4:9:2":
				jegyert = [1,2,4,9,2];
			break;
			case "1:1:1:3:4":
				jegyert = [1,1,1,3,4];
			break;
		}
		
		////////// OSSZESITETT ATLAG \\\\\\\\\/
		var osszeg=0;
		var atlag=0;
		var szam;
		var ertek;
		var ossz=0;
		var darab=0;
		
		$('.osztalyozo tr').each(function(){
			$(this).find('td').each(function(){
				$(this).find('a').each(function(){
					var jegy = $(this);
					//console.log(jegy[0]);
					for(i=0;i < jegy.length;i++){
						jegy = jegy.eq(0);
						if(jegy.attr('data-jegytipus') != 'teljesített óra'){
							szam=0;
							ertek=0;
							ossz=0;
							
							szam = jegy.attr('data-jegy');
							szam = parseInt(szam);
							if (/[a-zA-Z]/.test(szam)) {
								szam =0;
							} else {
								//Do nothing
							}
							
							ertek = jegy.attr('data-tipus');
							ertek = parseInt(ertek);
							if (/[a-zA-Z]/.test(ertek)) {
								ertek =0;
							} else {
								//Do nothing
							}
							switch(ertek){
								case 1:
									ertek = jegyert[0];
								break;
								case 2:
									ertek = jegyert[1];
								break;
								case 3:
									ertek = jegyert[2];
								break;
								case 4:
									ertek = jegyert[3];
								break;
								case 5:
									ertek = jegyert[4];
								break;
							}
							if(ertek > 0){
								darab = darab + ertek;
							} else { 	
								ertek = 0;
								szam = 0;
							}
							
							//Szamolas
							if(ertek > 0){
								ossz = ossz + (szam * ertek);
								osszeg = osszeg + ossz;	
								//console.log(szam + ' ' + ertek + ' ' + ossz + ' ' + osszeg + ' ' + darab);
							}
						}
					}
				});
			});
		});
		
		atlag = osszeg/darab;
		$('.osztalyozo tbody tr:last th').eq(-3).text('Összesített átlag: ' + atlag.toFixed(2).replace('.',','));
		
		///////////---OSSZESITETT ATLAG\\\\\\\\/
	}
		szamitas();
		$('#sulyozas').on('change', function () {
			szamitas();
		});
		
});