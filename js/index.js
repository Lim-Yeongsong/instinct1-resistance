	$(document).ready(function () {
		$(".after-star").hide();
		$(".folder").on("click", function(){
			$(".after-star").show(1000);
			$(".after-star").css("z-index", "200");
		});

		$(".folder-war").on("mouseenter", function(){
			$(".icon-bomb").attr("src", "./img/bomb_2.png");
			$(".icon-bomb").css("width", "100px", "height", "auto")
			$(".icon-bomb").css("z-index", "400")
		});

		$(".folder-war").on("mouseleave", function(){
			$(".icon-bomb").css("width", "60px", "height", "auto")
		});

		$(".folder-death").on("mouseenter", function(){
			$(".icon-fire").attr("src", "./img/fire_2.png");
			$(".icon-fire").css("width", "100px", "height", "auto")
			$(".icon-fire").css("z-index", "400")
		});

		$(".folder-death").on("mouseleave", function(){
			$(".icon-fire").attr("src", "./img/fire_3.png");
			$(".icon-fire").css("width", "60px", "height", "auto");
		});

		$(".folder-love").on("mouseenter", function(){
			$(".icon-heart").attr("src", "./img/heart_2.png");
			$(".icon-heart").css("width", "100px", "height", "auto");
			$(".icon-heart").css("z-index", "400");
		});

		$(".folder-love").on("mouseleave", function(){
			$(".icon-heart").attr("src", "./img/heart_3.png");
			$(".icon-heart").css("width", "60px", "height", "auto")
		});



		$(".music_1, .music_2, .music_3, .music_4, .music_5, .music_6, .music_7, .music_8").hide();
		$(".folder-music").on("click", function () {
			$(".music_1").show(200);
			$(".music_2").show(400);
			$(".music_3").show(600);
			$(".music_4").show(800);
			$(".music_5").show(1000);
			$(".music_6").show(1200);
			$(".music_7").show(1400);
			$(".music_8").show(1600);
		});


		$(".music_8").on("click", function(){
			$(".play_8")[0].play();
		});
		$(".music_8").on("dblclick", function(){
			$(".play_8")[0].pause();
		});
		$(".music_6").on("click", function(){
			$(".play_6")[0].play();
		});
		$(".music_6").on("dblclick", function(){
			$(".play_6")[0].pause();
		});
		$(".music_5").on("click", function(){
			$(".play_5")[0].play();
		});
		$(".music_5").on("dblclick", function(){
			$(".play_5")[0].pause();
		});
		$(".music_3").on("click", function(){
			$(".play_3")[0].play();
		});
		$(".music_3").on("dblclick", function(){
			$(".play_3")[0].pause();
		});
		$(".music_2").on("click", function(){
			$(".play_2")[0].play();
		});
		$(".music_2").on("dblclick", function(){
			$(".play_2")[0].pause();
		});
		$(".music_1").on("click", function(){
			$(".play_1")[0].play();
		});
		$(".music_1").on("dblclick", function(){
			$(".play_1")[0].pause();
		});


		$(".war_1, .war_2, .war_3, .war_4, .war_5, .war_6, .war_7, .war_8, .war_9").hide();
		$(".folder-war").on("click", function () {
			$(".war_1").show(200);
			$(".war_2").show(400);
			$(".war_3").show(600);
			$(".war_4").show(800);
			$(".war_5").show(1000);
			$(".war_6").show(1200);
			$(".war_7").show(1400);
			$(".war_8").show(1600);
			$(".war_9").show(1800);
		});

		$(".death_1, .death_2, .death_3, .death_4, .death_5, .death_6, .death_7").hide();
		$(".folder-death").on("click", function () {
			$(".death_1").show(200);
			$(".death_2").show(400);
			$(".death_3").show(600);
			$(".death_4").show(800);
			$(".death_5").show(1000);
			$(".death_6").show(1200);
			$(".death_7").show(1400);
			
		});

		$(".revolution_1, .revolution_2, .revolution_3, .revolution_4, .revolution_5, .revolution_6, .revolution_7").hide();
		$(".folder-revolution").on("click", function () {
			$(".revolution_1").show(200);
			$(".revolution_2").show(400);
			$(".revolution_3").show(600);
			$(".revolution_4").show(800);
			$(".revolution_5").show(1000);
			$(".revolution_6").show(1200);
			$(".revolution_7").show(1400);

		});

		$(".love_1, .love_2, .love_3, .love_4, .love_5").hide();
		$(".folder-love").on("click", function () {
			$(".love_1").show(200);
			$(".love_2").show(400);
			$(".love_3").show(600);
			$(".love_4").show(800);
			$(".love_5").show(1000);

		});

		$(".demo_1, .demo_2, .demo_3, .demo_4, .demo_5, .demo_6, .demo_7, .demo_8").hide();
		$(".folder-demo").on("click", function () {
			$(".demo_1").show(200);
			$(".demo_2").show(400);
			$(".demo_3").show(600);
			$(".demo_4").show(800);
			$(".demo_5").show(1000);
			$(".demo_6").show(1200);
			$(".demo_7").show(1400);
			$(".demo_8").show(1600);

		});

// resistance
		// $(".resistance").hide();
		// $(".folder-music, .folder-war, .folder-death, .folder-revolution, .folder-love, .folder-demo").on("click", function(){
		// $(".resistance").show(5000);

		//  });

		$(".resistance").hide();
		$(".folder-music").on("click", function(){
		$(".folder-war").on("click", function(){
		$(".folder-death").on("click", function(){
		$(".folder-revolution").on("click", function(){
		$(".folder-love").on("click", function(){
		$(".folder-demo").on("click", function(){
			$(".resistance").fadeTo(200,1);
			$(".resistance").css("z-index", 400);
		
		});
		});
		});
		});
		});
		});

		$(".resistance").hide();
		$(".folder-music").on("click", function(){
		$(".folder-death").on("click", function(){
		$(".folder-love").on("click", function(){
		$(".folder-war").on("click", function(){
		$(".folder-revolution").on("click", function(){
		$(".folder-demo").on("click", function(){
			$(".resistance").fadeTo(200,1);
			$(".resistance").css("z-index", 400);


		});
		});
		});
		});
		});
		});

		$(".resistance").hide();
		$(".folder-death").on("click", function(){
		$(".folder-love").on("click", function(){
		$(".folder-revolution").on("click", function(){
		$(".folder-demo").on("click", function(){
		$(".folder-war").on("click", function(){
		$(".folder-music").on("click", function(){
			$(".resistance").fadeTo(200,1);
			$(".resistance").css("z-index", 400);

			
		});
		});
		});
		});
		});
		});

		$(".resistance").hide();
		$(".folder-love").on("click", function(){
		$(".folder-demo").on("click", function(){
		$(".folder-death").on("click", function(){
		$(".folder-revolution").on("click", function(){
		$(".folder-music").on("click", function(){
		$(".folder-war").on("click", function(){
			$(".resistance").fadeTo(200,1);
			$(".resistance").css("z-index", 400);

			
		});
		});
		});
		});
		});
		});

		$(".resistance").hide();
		$(".folder-love").on("click", function(){
		$(".folder-demo").on("click", function(){
		$(".folder-revolution").on("click", function(){
		$(".folder-death").on("click", function(){
		$(".folder-war").on("click", function(){
		$(".folder-music").on("click", function(){
			$(".resistance").fadeTo(200,1);
			$(".resistance").css("z-index", 400);

			
		});
		});
		});
		});
		});
		});


		$(".resistance").hide();
		$(".folder-love").on("click", function(){
		$(".folder-demo").on("click", function(){
		$(".folder-death").on("click", function(){
		$(".folder-revolution").on("click", function(){
		$(".folder-war").on("click", function(){
		$(".folder-music").on("click", function(){
			$(".resistance").fadeTo(200,1);
			$(".resistance").css("z-index", 400);

			
		});
		});
		});
		});
		});
		});
		
		
		$(".resistance").hide();
		$(".folder-revolution").on("click", function(){
		$(".folder-demo").on("click", function(){
		$(".folder-love").on("click", function(){
		$(".folder-death").on("click", function(){
		$(".folder-music").on("click", function(){
		$(".folder-war").on("click", function(){
			$(".resistance").fadeTo(200,1);
			$(".resistance").css("z-index", 400);

			
		});
		});
		});
		});
		});
		});


// , .folder-war, .folder-death, .folder-revolution, .folder-love, .folder-demo"
		


// music
		$(".hover-music1").hide();
		$(".music_1").on("mouseenter", function() {
			$(".music_1").css("z-index", 300);
			$(".hover-music1").fadeTo(200,1);

		$(".music_1").on("mouseleave", function(){
			$(".music_1").css("z-index", 1);
			$(".hover-music1").fadeTo(400,0);
		});
		});

		$(".hover-music2").hide();
		$(".music_2").on("mouseenter", function() {
			$(".music_2").css("z-index", 300);
			$(".hover-music2").fadeTo(200,1);

		$(".music_2").on("mouseleave", function(){
			$(".music_2").css("z-index", 2);
			$(".hover-music2").fadeTo(400,0);
		});
		});

		$(".hover-music3").hide();
		$(".music_3").on("mouseenter", function() {
			$(".music_3").css("z-index", 300);
			$(".hover-music3").fadeTo(200,1);

		$(".music_3").on("mouseleave", function(){
			$(".music_3").css("z-index", 3);
			$(".hover-music3").fadeTo(400,0);
		});
		});

		$(".hover-music4").hide();
		$(".music_4").on("mouseenter", function() {
			$(".music_4").css("z-index", 300);
			$(".hover-music4").fadeTo(200,1);

		$(".music_4").on("mouseleave", function(){
			$(".music_4").css("z-index", 4);
			$(".hover-music4").fadeTo(400,0);
		});
		});

		$(".hover-music5").hide();
		$(".music_5").on("mouseenter", function() {
			$(".music_5").css("z-index", 300);
			$(".hover-music5").fadeTo(200,1);

		$(".music_5").on("mouseleave", function(){
			$(".music_5").css("z-index", 5);
			$(".hover-music5").fadeTo(400,0);
		});
		});

		$(".hover-music6").hide();
		$(".music_6").on("mouseenter", function() {
			$(".music_6").css("z-index", 300);
			$(".hover-music6").fadeTo(200,1);

		$(".music_6").on("mouseleave", function(){
			$(".music_6").css("z-index", 6);
			$(".hover-music6").fadeTo(400,0);
		});
		});

		$(".hover-music7").hide();
		$(".music_7").on("mouseenter", function() {
			$(".music_7").css("z-index", 300);
			$(".hover-music7").fadeTo(200,1);

		$(".music_7").on("mouseleave", function(){
			$(".music_7").css("z-index", 7);
			$(".hover-music7").fadeTo(400,0);
		});
		});

		$(".hover-music8").hide();
		$(".music_8").on("mouseenter", function() {
			$(".music_8").css("z-index", 300);
			$(".hover-music8").fadeTo(200,1);

		$(".music_8").on("mouseleave", function(){
			$(".music_8").css("z-index", 8);
			$(".hover-music8").fadeTo(400,0);
		});
		});


// war
		// $(".hover-war1").hide();
		// $(".war_1").on("mouseenter", function() {
		// 	$(".war_1").css("z-index", 300);
		// 	$(".hover-war1").show(200);
			

		// $(".war_1").on("mouseleave", function(){
		// 	$(".war_1").css("z-index", 11);
		// 	$(".hover-war1").hide(400);
			
		// });
		// });

		$(".hover-war2").hide();
		$(".war_2").on("mouseenter", function() {
			$(".war_2").css("z-index", 300);
			$(".hover-war2").fadeTo(200,1);
			

		$(".war_2").on("mouseleave", function(){
			$(".war_2").css("z-index", 12);
			$(".hover-war2").fadeTo(400,0);
			
		});
		});

		$(".hover-war3").hide();
		$(".war_3").on("mouseenter", function() {
			$(".war_3").css("z-index", 300);
			$(".hover-war3").fadeTo(200,1);
			

		$(".war_3").on("mouseleave", function(){
			$(".war_3").css("z-index", 13);
			$(".hover-war3").fadeTo(400,0);
			
		});
		});

		$(".hover-war4").hide();
		$(".war_4").on("mouseenter", function() {
			$(".war_4").css("z-index", 300);
			$(".hover-war4").fadeTo(200,1);
			
		$(".war_4").on("mouseleave", function(){
			$(".war_4").css("z-index", 14);
			$(".hover-war4").fadeTo(400,0);
			
		});
		});

		$(".hover-war5").hide();
		$(".war_5").on("mouseenter", function() {
			$(".war_5").css("z-index", 300);
			$(".hover-war5").fadeTo(200,1);
			
		$(".war_5").on("mouseleave", function(){
			$(".war_5").css("z-index", 15);
			$(".hover-war5").fadeTo(400,0);
			
		});
		});

		$(".hover-war6").hide();
		$(".war_6").on("mouseenter", function() {
			$(".war_6").css("z-index", 300);
			$(".hover-war6").fadeTo(200,1);
			
		$(".war_6").on("mouseleave", function(){
			$(".war_6").css("z-index", 16);
			$(".hover-war6").fadeTo(400,0);
			
		});
		});

		$(".hover-war7").hide();
		$(".war_7").on("mouseenter", function() {
			$(".war_7").css("z-index", 300);
			$(".hover-war7").fadeTo(200,1);
		
		$(".war_7").on("mouseleave", function(){
			$(".war_7").css("z-index", 17);
			$(".hover-war7").fadeTo(400,0);
			
		});
		});

		$(".hover-war8").hide();
		$(".war_8").on("mouseenter", function() {
			$(".war_8").css("z-index", 300);
			$(".hover-war8").fadeTo(200,1);
			
		$(".war_8").on("mouseleave", function(){
			$(".war_8").css("z-index", 18);
			$(".hover-war8").fadeTo(400,0);
			
		});
		});

		$(".hover-war9").hide();
		$(".war_9").on("mouseenter", function() {
			$(".war_9").css("z-index", 300);
			$(".hover-war9").fadeTo(200,1);
			

		$(".war_9").on("mouseleave", function(){
			$(".war_9").css("z-index", 19);
			$(".hover-war9").fadeTo(400,0);
		});
		});

// death
		$(".hover-death1").hide();
		$(".death_1").on("mouseenter", function() {
			$(".death_1").css("z-index", 300);
			$(".hover-death1").fadeTo(200,1);
			

		$(".death_1").on("mouseleave", function(){
			$(".death_1").css("z-index", 11);
			$(".hover-death1").fadeTo(400,0);
			
		});
		});

		$(".hover-death2").hide();
		$(".death_2").on("mouseenter", function() {
			$(".death_2").css("z-index", 300);
			$(".hover-death2").fadeTo(200,1);
			

		$(".death_2").on("mouseleave", function(){
			$(".death_2").css("z-index", 12);
			$(".hover-death2").fadeTo(400,0);
			
		});
		});

		$(".hover-death3").hide();
		$(".death_3").on("mouseenter", function() {
			$(".death_3").css("z-index", 300);
			$(".hover-death3").fadeTo(200,1);
			

		$(".death_3").on("mouseleave", function(){
			$(".death_3").css("z-index", 13);
			$(".hover-death3").fadeTo(400,0);
			
		});
		});

		$(".hover-death4").hide();
		$(".death_4").on("mouseenter", function() {
			$(".death_4").css("z-index", 300);
			$(".hover-death4").fadeTo(200,1);
			

		$(".death_4").on("mouseleave", function(){
			$(".death_4").css("z-index", 14);
			$(".hover-death4").fadeTo(400,0);
			
		});
		});

		$(".hover-death5").hide();
		$(".death_5").on("mouseenter", function() {
			$(".hover-death5").fadeTo(200,1);
			$(".death_5").css("z-index", 300);

		$(".death_5").on("mouseleave", function(){
			$(".hover-death5").fadeTo(400,0);
			$(".death_5").css("z-index", 15);
		});
		});

		$(".hover-death6").hide();
		$(".death_6").on("mouseenter", function() {
			$(".death_6").css("z-index", 300);
			$(".hover-death6").fadeTo(200,1);
			

		$(".death_6").on("mouseleave", function(){
			$(".death_6").css("z-index", 16);
			$(".hover-death6").fadeTo(400,0);
			
		});
		});

		$(".hover-death7").hide();
		$(".death_7").on("mouseenter", function() {
			$(".death_7").css("z-index", 300);
			$(".hover-death7").fadeTo(200,1);

		$(".death_7").on("mouseleave", function(){
			$(".death_7").css("z-index", 17);
			$(".hover-death7").fadeTo(400,0);
		});
		});

// revolution
		$(".hover-revolution1").hide();
		$(".revolution_1").on("mouseenter", function() {
			$(".revolution_1").css("z-index", 300);
			$(".hover-revolution1").fadeTo(200,1);
			

		$(".revolution_1").on("mouseleave", function(){
			$(".revolution_1").css("z-index", 31);
			$(".hover-revolution1").fadeTo(400,0);
			
		});
		});

		$(".hover-revolution2").hide();
		$(".revolution_2").on("mouseenter", function() {
			$(".revolution_2").css("z-index", 300)
			$(".hover-revolution2").fadeTo(200,1);
			

		$(".revolution_2").on("mouseleave", function(){
			$(".revolution_2").css("z-index", 32);
			$(".hover-revolution2").fadeTo(400,0);
			
		});
		});

		$(".hover-revolution3").hide();
		$(".revolution_3").on("mouseenter", function() {
			$(".revolution_3").css("z-index", 300);
			$(".hover-revolution3").fadeTo(200,1);
			

		$(".revolution_3").on("mouseleave", function(){
			$(".revolution_3").css("z-index", 33);
			$(".hover-revolution3").fadeTo(400,0);
			
		});
		});

		$(".hover-revolution4").hide();
		$(".revolution_4").on("mouseenter", function() {
			$(".revolution_4").css("z-index", 300);
			$(".hover-revolution4").fadeTo(200,1);
			

		$(".revolution_4").on("mouseleave", function(){
			$(".revolution_4").css("z-index", 34);
			$(".hover-revolution4").fadeTo(400,0);
			
		});
		});

		$(".hover-revolution5").hide();
		$(".revolution_5").on("mouseenter", function() {
			$(".revolution_5").css("z-index", 300);
			$(".hover-revolution5").fadeTo(200,1);
			

		$(".revolution_5").on("mouseleave", function(){
			$(".revolution_5").css("z-index", 35);
			$(".hover-revolution5").fadeTo(400,0);
			
		});
		});

		$(".hover-revolution6").hide();
		$(".revolution_6").on("mouseenter", function() {
			$(".revolution_6").css("z-index", 300);
			$(".hover-revolution6").fadeTo(200,1);
			
		$(".revolution_6").on("mouseleave", function(){
			$(".revolution_6").css("z-index", 36);
			$(".hover-revolution6").fadeTo(400,0);
			
		});
		});

		$(".hover-revolution7").hide();
		$(".revolution_7").on("mouseenter", function() {
			$(".revolution_7").css("z-index", 300);
			$(".hover-revolution7").fadeTo(200,1);
			

		$(".revolution_7").on("mouseleave", function(){
			$(".revolution_7").css("z-index", 37);
			$(".hover-revolution7").fadeTo(400,0);
			

		});
		});


// love 

		$(".hover-love1").hide();
		$(".love_1").on("mouseenter", function() {
			$(".love_1").css("z-index", 300);
			$(".hover-love1").fadeTo(200,1);
			

		$(".love_1").on("mouseleave", function(){
			$(".love_1").css("z-index", 21);
			$(".hover-love1").fadeTo(400,0);
			
		});
		});

		$(".hover-love2").hide();
		$(".love_2").on("mouseenter", function() {
			$(".love_2").css("z-index", 300);
			$(".hover-love2").fadeTo(200,1);
			

		$(".love_2").on("mouseleave", function(){
			$(".love_2").css("z-index", 22);
			$(".hover-love2").fadeTo(400,0);
			
		});
		});

		$(".hover-love3").hide();
		$(".love_3").on("mouseenter", function() {
			$(".love_3").css("z-index", 300);
			$(".hover-love3").fadeTo(200,1);
			

		$(".love_3").on("mouseleave", function(){
			$(".love_3").css("z-index", 23);
			$(".hover-love3").fadeTo(400,0);
			
		});
		});

		$(".hover-love4").hide();
		$(".love_4").on("mouseenter", function() {
			$(".love_4").css("z-index", 300);
			$(".hover-love4").fadeTo(200,1);
			

		$(".love_4").on("mouseleave", function(){
			$(".love_4").css("z-index", 24);
			$(".hover-love4").fadeTo(400,0);
			
		});
		});

		$(".hover-love5").hide();
		$(".love_5").on("mouseenter", function() {
			$(".love_5").css("z-index", 300);
			$(".hover-love5").fadeTo(200,1);
			

		$(".love_5").on("mouseleave", function(){
			$(".love_5").css("z-index", 25);
			$(".hover-love5").fadeTo(400,0);
			
		});
		});

// demo

		$(".hover-demo1").hide();
		$(".demo_1").on("mouseenter", function() {
			$(".demo_1").css("z-index", 500);
			$(".hover-demo1").fadeTo(200,1);
			

		$(".demo_1").on("mouseleave", function(){
			$(".demo_1").css("z-index", 31);
			$(".hover-demo1").fadeTo(400,0);
			
		});
		});

		$(".hover-demo2").hide();
		$(".demo_2").on("mouseenter", function() {
			$(".demo_2").css("z-index", 500);
			$(".hover-demo2").fadeTo(200,1);
			

		$(".demo_2").on("mouseleave", function(){
			$(".demo_2").css("z-index", 32);
			$(".hover-demo2").fadeTo(400,0);
			
		});
		});

		$(".hover-demo3").hide();
		$(".demo_3").on("mouseenter", function() {
			$(".demo_3").css("z-index", 500);
			$(".hover-demo3").fadeTo(200,1);
			

		$(".demo_3").on("mouseleave", function(){
			$(".demo_3").css("z-index", 33);
			$(".hover-demo3").fadeTo(400,0);
			
		});
		});

		$(".hover-demo4").hide();
		$(".demo_4").on("mouseenter", function() {
			$(".demo_4").css("z-index", 500);
			$(".hover-demo4").fadeTo(200,1);
			

		$(".demo_4").on("mouseleave", function(){
			$(".demo_4").css("z-index", 34);
			$(".hover-demo4").fadeTo(400,0);
			

		});
		});

		$(".hover-demo5").hide();
		$(".demo_5").on("mouseenter", function() {
			$(".demo_5").css("z-index", 500);
			$(".hover-demo5").fadeTo(200,1);
			

		$(".demo_5").on("mouseleave", function(){
			$(".demo_5").css("z-index", 35);
			$(".hover-demo5").fadeTo(400,0);
			
		});
		});

		$(".hover-demo6").hide();
		$(".demo_6").on("mouseenter", function() {
			$(".demo_6").css("z-index", 500);
			$(".hover-demo6").fadeTo(200,1);
			
		$(".demo_6").on("mouseleave", function(){
			$(".demo_6").css("z-index", 36);
			$(".hover-demo6").fadeTo(400,0);
			
		});
		});

		$(".hover-demo7").hide();
		$(".demo_7").on("mouseenter", function() {
			$(".demo_7").css("z-index", 500);
			$(".hover-demo7").fadeTo(200,1);
			

		$(".demo_7").on("mouseleave", function(){
			$(".demo_7").css("z-index", 37);
			$(".hover-demo7").fadeTo(400,0);
			
		});
		});

		$(".hover-demo8").hide();
		$(".demo_8").on("mouseenter", function() {
			$(".demo_8").css("z-index", 500);
			$(".hover-demo8").fadeTo(200,1);
			

		$(".demo_8").on("mouseleave", function(){
			$(".demo_8").css("z-index", 38);
			$(".hover-demo8").fadeTo(400,0);
			
		});
		});

		$(".content").on("hover", function(){
			$(".hover-box").show(50);
		});


	})

