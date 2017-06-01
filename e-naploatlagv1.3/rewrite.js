jQuery(document).ready(function() {
		
		$('.osztalyozo thead tr:last th:last').after('<th>Átlag</th>');
		$('.osztalyozo thead tr:first th:last').after('<th><select id="sel_suly"><option value="1" selected>1:1:1:2:2</option><option value="2">1:1:1:1:2</option><option value="3">1:2:2:4:4</option><option value="4">1:2:3:4:5</option><option value="5">1:5:5:5:5</option><option value"6">1:1:2:2:2</option><option value="7">1:1:3:5:7</option><option value="8">1:2:4:9:2</option><option value="9">1:1:1:3:4</option></select></th>');
		var bizfixelso = $('.osztalyozo tbody tr:last th').eq(-2).text();
		var bizfixmasodik = $('.osztalyozo tbody tr:last th:last').text();
		$('.osztalyozo tbody tr:last th:last').remove();
		$('.osztalyozo tbody tr:last th').eq(-2).text(bizfixelso);
		$('.osztalyozo tbody tr:last th').eq(-1).text(bizfixmasodik);
		$('.osztalyozo tbody tr:last th:last').after('<th>Összesitett Átlag: - </th>');
		$('.osztalyozo tbody tr').each(function(){
			$(this).find('td:last').after('<td style="text-align:center; background-color:#646383">-</td>');
		});
	
	function szamitas(){
		var sulyozas = $('#sel_suly').val();
		sulyozas = parseInt(sulyozas);
		var jegyert = [];
		switch(sulyozas){
			case 1:
				jegyert = [1,1,1,2,2];
			break;
			case 2:
				jegyert = [1,1,1,1,2];
			break;
			case 3:
				jegyert = [1,2,2,4,4];
			break;
			case 4:
				jegyert = [1,2,3,4,5];
			break;
			case 5:
				jegyert = [1,5,5,5,5];
			break;
			case 6:
				jegyert = [1,1,2,2,2];
			break;
			case 7:
				jegyert = [1,1,3,5,7];
			break;
			case 8:
				jegyert = [1,2,4,9,2];
			break;
			case 9:
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
							}
							
							ertek = jegy.attr('data-tipus');
							ertek = parseInt(ertek);
							if (/[a-zA-Z]/.test(ertek)) {
								ertek =0;
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
							
							if(ertek > 0){
								ossz = ossz + (szam * ertek);
								osszeg = osszeg + ossz;	
							}
						}
					}
				});
			});
		});
		atlag = osszeg/darab;
		$('.osztalyozo tbody tr:last th:last').text('Összesített átlag: ' + atlag.toFixed(2).replace('.',','));
		
		///////////---OSSZESITETT ATLAG\\\\\\\\/
		
		//////////TANTARGYANKENTI ATLAG\\\\\\\\\/
		var kul_osszeg=0;
		var kul_atlag=0;
		var kul_szam;
		var kul_ertek;
		var kul_ossz=0;
		var kul_darab=0;
		
		$('.osztalyozo tbody tr').each(function(){
			kul_osszeg=0;
			kul_atlag=0;
			kul_szam =0;
			kul_ertek =0;
			kul_ossz=0;
			kul_darab=0;
			$(this).find('td').each(function(){
				$(this).find('a').each(function(){
					var kul_jegy = $(this);
					for(i=0;i < kul_jegy.length;i++){
						kul_jegy = kul_jegy.eq(0);
						if(kul_jegy.attr('data-jegytipus') != 'teljesített óra'){
							kul_szam=0;
							kul_ertek=0;
							kul_ossz=0;
							
							kul_szam = kul_jegy.attr('data-jegy');
							kul_szam = parseInt(kul_szam);
							if (/[a-zA-Z]/.test(kul_szam)) {
								kul_szam =0;
							}
							
							kul_ertek = kul_jegy.attr('data-tipus');
							kul_ertek = parseInt(kul_ertek);
							if (/[a-zA-Z]/.test(kul_ertek)) {
								kul_ertek =0;
							}
							
							switch(kul_ertek){
								case 1:
									kul_ertek = jegyert[0];
								break;
								case 2:
									kul_ertek = jegyert[1];
								break;
								case 3:
									kul_ertek = jegyert[2];
								break;
								case 4:
									kul_ertek = jegyert[3];
								break;
								case 5:
									kul_ertek = jegyert[4];
								break;
							}
							if(kul_ertek > 0){
								kul_darab = kul_darab + kul_ertek;
							} else { 	
								kul_ertek = 0;
								kul_szam = 0;
							}
							if(kul_ertek > 0){
								kul_ossz = kul_ossz + (kul_szam * kul_ertek);
								kul_osszeg = kul_osszeg + kul_ossz;	
							}
						}
					}
				});	
			});
			kul_atlag = kul_osszeg/kul_darab;
			if(isNaN(kul_atlag)){ 
				kul_atlag = "-";
				$(this).find('td:last').text(kul_atlag);
			} else{
				$(this).find('td:last').text(kul_atlag.toFixed(2).replace('.',','));
			}
		});
		//////////---TANTARGYANKENTI ATLAG\\\\\\\\\\/
	}
		szamitas();
		$('#sel_suly').on('change', function () {
			szamitas();
		});
		
		$( ".osztalyozo tbody tr" )
			.on('mouseenter', function() {
				$(this).find('td:lt(10)').css({
					'background-color': 'rgba(100,100,100,0.25)',
				});
			})
			.on('mouseleave', function() {
				$(this).find('td:lt(10)').css({
					'background-color': '#eeeeee',
				});
			});
});