window.onload=function(){
	let shoplist=document.getElementsByClassName("shop-list")[0];
	//就算只有一个元素也要写下标
	let lis=shoplist.getElementsByTagName("li");
	let item=document.getElementsByClassName("item");
	let circle=document.getElementsByClassName("circle")[0];
	let circle1=circle.getElementsByClassName("circle1");
	let bannerbox=document.getElementsByClassName("banner-box")[0];
	let imgs=document.getElementsByClassName("img-1");

	let banner=$(".banner_bottom")[0];
	
	//侧导航
	//第一种：lis 对应  item   //第二种：先找lis 再找它里面的item
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			//item[i].style.display="block";
			item[i].className="item block";
		}
		lis[i].onmouseout=function(){
			//item[i].style.display="none";
			item[i].className="item";
		}
	}
	
	
	console.log(circle1);
	//circle/////////////////////////////////////////////////////轮播图
	//第一种：所有的消失，对应的显示，也可以是z-index/opacity（操作所有图片）
	for(let i=0;i<circle1.length;i++){	
		circle1[i].onclick=function(){
			for(let j=0;j<imgs.length;j++){
				imgs[j].style.display="none";//除了i以外，其它全部隐藏
				circle1[j].style.background="rgba(0,0,0,0.3)";	
				circle1[j].style.borderRadius="50%";	
			}
			imgs[i].style.display="block";
			circle1[i].style.background="rgba(255, 255, 255, 0.5)";		
			circle1[i].style.borderRadius="50%";
			switch(i){
			case 0:
				banner.style.background="#F9CD22";
				break;
			case 1:
				banner.style.background="#850B2A";
				break;
			case 2:
				banner.style.background="#AEABAC";
				break;
			case 3:
				banner.style.background="#E8E8E8";
				break;
			case 4:
				banner.style.background="#FF6B40";
				break;
			case 5:
				banner.style.background="#7B12E5";
				break;
		}				
		}
	}
	// //第二种：对应的显示，除了要显示的其它所有的消失（操作所有图片）
	// for(let i=0;i<circle1.length;i++){	
	// 	circle1[i].onmouseover=function(){			
	// 		imgs[i].style.display="block";
	// 		for(let j=0;j<imgs.length;j++){
	// 			if(i!=j){
	// 				imgs[j].style.display="none";//除了i以外，其它全部隐藏
	// 			}	
	// 		}
	// 	}
	// }
	// //第三种：把窗口当前显示的none，把要显示的block（只需要操作两张图）	
	//不能用var，会越界，只有一个临界值，let会保留每次循环的结果，
	//如果要用var，要给对象添加属性：对象名.index=i
	// let now=0;//当前窗口
	// for(let i=0;i<circle1.length;i++){
	// 	circle1[i].onmouseover=function(){	
	// 		imgs[now].style.display="none";
	// 		imgs[i].style.display="block";
	// 		now=i;//更新now
	// 	}
	// }
	// //第四种：var
	//不能用var，会越界，只有一个临界值，let会保留每次循环的结果，
	//如果要用var，要给对象添加属性：对象名.index=i
	// let now=0;//记录窗口显示的下表
	// for(var i=0;i<circle1.length;i++){
	// 	circle1[i].index=i;//给对象添加属性
	// 	circle1[i].onclick=function(){	
	// 		imgs[now].style.display="none";
	// 		imgs[this.index].style.display="block";
	// 		now=this.index;
	// 	}
	// }
	// for(var i=0;i<circle1.length;i++){
	// 	circle1[i].index=i;	
	// 	circle1[i].onclick=function(){
	// 		for(let j=0;j<imgs.length;j++){
	// 				imgs[j].style.display="none";//除了i以外，其它全部隐藏
	// 		}
	// 		imgs[this.index].style.display="block";
	// 	}
	// }
	// // 第五种：闭包函数
	// let now=0;
	// for(var i=0;i<circle1.length;i++){
	// 	circle1[i].index=i;
	// 	circle1[i].onclick=(function(i){
	// 		return function(){
	// 			imgs[now].style.display="none";
	// 			imgs[i].style.display="block";
	// 			now=i;	
	// 		}
	// 	})(i)
	// }
////////////////////////////////////////////////////////////自动轮播
	let t;
	let num=0;//记录窗口显示的下表
	t=setInterval(move, 2000);
	function move(){
		num++;
		if(num==imgs.length){
			num=-1;
			move();
		}	
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.display="none";
			circle1[i].style.background="rgba(0,0,0,0.3)";	
			circle1[i].style.borderRadius="50%";	
		}
		imgs[num].style.display="block";
		circle1[num].style.background="rgba(255, 255, 255, 0.5)";		
		circle1[num].style.borderRadius="50%";
		switch(num){
			case 0:
				banner.style.background="#F9CD22";
				break;
			case 1:
				banner.style.background="#850B2A";
				break;
			case 2:
				banner.style.background="#AEABAC";
				break;
			case 3:
				banner.style.background="#E8E8E8";
				break;
			case 4:
				banner.style.background="#FF6B40";
				break;
			case 5:
				banner.style.background="#7B12E5";
				break;
		}		
	}
///////////////////////////////////////////////////////////鼠标移入:不动/鼠标移出:动
	
	banner.onmouseover=function(){
		clearInterval(t);
		//num=i;
	}
	banner.onmouseout=function(){
		t=setInterval(move, 2000);
	}
///////////////////////////////////////////////////////////点击圆点，变样式


	

	
}
