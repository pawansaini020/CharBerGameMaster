// @Author : Pawan_Saini
// @Github : pawanmawata020





function helpbtn(){
	document.getElementById("help-div").style.display = "block";
    document.getElementById("game-div").style.display = "none";
}

function backbtn(){
	document.getElementById("help-div").style.display = "none";
    document.getElementById("game-div").style.display = "block";
}







var N_SIZE=24,EMPTY='...',boxes=[],turn='X',movesX,movesO;
var N_MAX_MOVES=12, tempMaxMovesX=6,tempMaxMovesO=6, prev_EraseX,prev_EraseO;
var check_Matrix=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0];
var tempCheck=false;

// make the board and start

function init(){

	var identifier =0;

	var box1=document.getElementById('box1');
	var box2=document.getElementById('box2');
	var box3=document.getElementById('box3');
	var box4=document.getElementById('box4');
	var box5=document.getElementById('box5');
	var box6=document.getElementById('box6');
	var box7=document.getElementById('box7');
	var box8=document.getElementById('box8');
	var box9=document.getElementById('box9');
	var box10=document.getElementById('box10');
	var box11=document.getElementById('box11');
	var box12=document.getElementById('box12');
	var box13=document.getElementById('box13');
	var box14=document.getElementById('box14');
	var box15=document.getElementById('box15');
	var box16=document.getElementById('box16');
	var box17=document.getElementById('box17');
	var box18=document.getElementById('box18');
	var box19=document.getElementById('box19');
	var box20=document.getElementById('box20');
	var box21=document.getElementById('box21');
	var box22=document.getElementById('box22');
	var box23=document.getElementById('box23');
	var box24=document.getElementById('box24');

	for(var i=0;i<N_SIZE;i++){

			var cell;

			if(i==0){ cell = box1;}
			else if(i==1 ){ cell = box2;}
			else if(i==2 ){ cell = box3;}
			else if(i==3 ){ cell = box4;}
			else if(i==4 ){ cell = box5;}
			else if(i==5 ){ cell = box6;}
			else if(i==6 ){ cell = box7;}
			else if(i==7 ){ cell = box8;}
			else if(i==8 ){ cell = box9;}
			else if(i==9 ){ cell = box10;}
			else if(i==10 ){ cell = box11;}
			else if(i==11 ){ cell = box12;}
			else if(i==12 ){ cell = box13;}
			else if(i==13 ){ cell = box14;}
			else if(i==14 ){ cell = box15;}
			else if(i==15 ){ cell = box16;}
			else if(i==16){ cell = box17;}
			else if(i==17 ){ cell = box18;}
			else if(i==18 ){ cell = box19;}
			else if(i==19 ){ cell = box20;}
			else if(i==20 ){ cell = box21;}
			else if(i==21 ){ cell = box22;}
			else if(i==22 ){ cell = box23;}
			else if(i==23 ){ cell = box24;}

			cell.identifier=identifier;//know 
			boxes.push(cell);
			identifier+=1;
	}
	

	startNewGame();

}


// new game

function startNewGame(){
	
	for(var i=0;i<N_SIZE;i++){
		check_Matrix[i]=0;
	}
	
	N_MAX_MOVES=12;
	tempMaxMovesX=6;
	tempMaxMovesO=6;
	prev_EraseX=-1;
	prev_EraseO=-1;
	tempCheck=false;
	movesX=0;
	movesO=0;
	turn='X';
	boxes.forEach(function (square){// learn
		square.innerHTML=EMPTY;
	})
	boxes.forEach(function (square){// learn
		square.addEventListener('click',set);//clicking event is add
	})
	document.getElementById('turn').textContent='Player '+turn;
}

// remove
function removeComb(a,b,c){
	setTimeout(() => { console.log("wait"); }, 5000);
	check_Matrix[a]=0;
	check_Matrix[b]=0;
	check_Matrix[c]=0;
	boxes.forEach(function (square){// learn

		if(square.identifier==a){

			square.innerHTML=EMPTY;

		}
		else if(square.identifier==b){

			square.innerHTML=EMPTY;
		}
		else if(square.identifier==c){

			square.innerHTML=EMPTY;
		}
		// square.innerHTML=EMPTY;
	})
	if(turn=='X'){
		movesX-=3;
		prev_EraseX=-1;
	}
	else{
		movesO-=3;
		prev_EraseO=-1;
	}
	
}

//win or lose
function win(turn){

	// all the cell classes
	if(turn=='X'){
		if((check_Matrix[0]==1 & check_Matrix[1]==1 & check_Matrix[2]==1)){
			removeComb(0,1,2);
			return true;
		}
		else if((check_Matrix[3]==1 & check_Matrix[4]==1 & check_Matrix[5]==1)){
			removeComb(3,4,5);
			return true;
		}
		else if((check_Matrix[6]==1 & check_Matrix[7]==1 & check_Matrix[8]==1)){
			removeComb(6,7,8);
			return true;
		}
		else if((check_Matrix[9]==1 & check_Matrix[10]==1 & check_Matrix[11]==1)){
			removeComb(9,10,11);
			return true;
		}
		else if((check_Matrix[12]==1 & check_Matrix[13]==1 & check_Matrix[14]==1)){
			removeComb(12,13,14);
			return true;
		}
		else if((check_Matrix[15]==1 & check_Matrix[16]==1 & check_Matrix[17]==1)){
			removeComb(15,16,17);
			return true;
		}
		else if((check_Matrix[18]==1 & check_Matrix[19]==1 & check_Matrix[20]==1)){
			removeComb(18,19,20);
			return true;
		}
		else if((check_Matrix[21]==1 & check_Matrix[22]==1 & check_Matrix[23]==1)){
			removeComb(21,22,23);
			return true;
		}
		if((check_Matrix[0]==1 & check_Matrix[9]==1 & check_Matrix[21]==1)){
			removeComb(0,9,21);
			return true;
		}
		else if((check_Matrix[3]==1 & check_Matrix[10]==1 & check_Matrix[18]==1)){
			removeComb(3,10,18);
			return true;
		}
		else if((check_Matrix[6]==1 & check_Matrix[11]==1 & check_Matrix[15]==1)){
			removeComb(6,11,15);
			return true;
		}
		else if((check_Matrix[1]==1 & check_Matrix[4]==1 & check_Matrix[7]==1)){
			removeComb(1,4,7);
			return true;
		}
		else if((check_Matrix[16]==1 & check_Matrix[19]==1 & check_Matrix[22]==1)){
			removeComb(16,19,22);
			return true;
		}
		else if((check_Matrix[8]==1 & check_Matrix[12]==1 & check_Matrix[17]==1)){
			removeComb(8,12,17);
			return true;
		}
		else if((check_Matrix[5]==1 & check_Matrix[13]==1 & check_Matrix[20]==1)){
			removeComb(5,13,20);
			return true;
		}
		else if((check_Matrix[2]==1 & check_Matrix[14]==1 & check_Matrix[23]==1)){
			removeComb(2,14,23);
			return true;
		}
		else if((check_Matrix[0]==1 & check_Matrix[3]==1 & check_Matrix[6]==1)){
			removeComb(0,3,6);
			return true;
		}
		else if((check_Matrix[2]==1 & check_Matrix[5]==1 & check_Matrix[8]==1)){
			removeComb(2,5,8);
			return true;
		}
		else if((check_Matrix[15]==1 & check_Matrix[18]==1 & check_Matrix[21]==1)){
			removeComb(15,18,21);
			return true;
		}
		else if((check_Matrix[17]==1 & check_Matrix[20]==1 & check_Matrix[23]==1)){
			removeComb(17,20,23);
			return true;
		}
		else{
			return false;
		}
	}
	else{
		if((check_Matrix[0]==2 & check_Matrix[1]==2 & check_Matrix[2]==2)){
			removeComb(0,1,2);
			return true;
		}
		else if((check_Matrix[3]==2 & check_Matrix[4]==2 & check_Matrix[5]==2)){
			removeComb(3,4,5);
			return true;
		}
		else if((check_Matrix[6]==2 & check_Matrix[7]==2 & check_Matrix[8]==2)){
			removeComb(6,7,8);
			return true;
		}
		else if((check_Matrix[9]==2 & check_Matrix[10]==2 & check_Matrix[11]==2)){
			removeComb(9,10,11);
			return true;
		}
		else if((check_Matrix[12]==2 & check_Matrix[13]==2 & check_Matrix[14]==2)){
			removeComb(12,13,14);
			return true;
		}
		else if((check_Matrix[15]==2 & check_Matrix[16]==2 & check_Matrix[17]==2)){
			removeComb(15,16,17);
			return true;
		}
		else if((check_Matrix[18]==2 & check_Matrix[19]==2 & check_Matrix[20]==2)){
			removeComb(18,19,20);
			return true;
		}
		else if((check_Matrix[21]==2 & check_Matrix[22]==2 & check_Matrix[23]==2)){
			removeComb(21,22,23);
			return true;
		}
		if((check_Matrix[0]==2 & check_Matrix[9]==2 & check_Matrix[21]==2)){
			removeComb(0,9,21);
			return true;
		}
		else if((check_Matrix[3]==2 & check_Matrix[10]==2 & check_Matrix[18]==2)){
			removeComb(3,10,18);
			return true;
		}
		else if((check_Matrix[6]==2 & check_Matrix[11]==2 & check_Matrix[15]==2)){
			removeComb(6,11,15);
			return true;
		}
		else if((check_Matrix[1]==2 & check_Matrix[4]==2 & check_Matrix[7]==2)){
			removeComb(1,4,7);
			return true;
		}
		else if((check_Matrix[16]==2 & check_Matrix[19]==2 & check_Matrix[22]==2)){
			removeComb(16,19,22);
			return true;
		}
		else if((check_Matrix[8]==2 & check_Matrix[12]==2 & check_Matrix[17]==2)){
			removeComb(8,12,17);
			return true;
		}
		else if((check_Matrix[5]==2 & check_Matrix[13]==2 & check_Matrix[20]==2)){
			removeComb(5,13,20);
			return true;
		}
		else if((check_Matrix[2]==2 & check_Matrix[14]==2 & check_Matrix[23]==2)){
			removeComb(2,14,23);
			return true;
		}
		else if((check_Matrix[0]==2 & check_Matrix[3]==2 & check_Matrix[6]==2)){
			removeComb(0,3,6);
			return true;
		}
		else if((check_Matrix[2]==2 & check_Matrix[5]==2 & check_Matrix[8]==2)){
			removeComb(2,5,8);
			return true;
		}
		else if((check_Matrix[15]==2 & check_Matrix[18]==2 & check_Matrix[21]==2)){
			removeComb(15,18,21);
			return true;
		}
		else if((check_Matrix[17]==2 & check_Matrix[20]==2 & check_Matrix[23]==2)){
			removeComb(17,20,23);
			return true;
		}
		else{
			return false;
		}
	}
	return false;
}


// set when clicked as well change the turn

function finalWin(){
	var x=false, o=false;
	for(var i=0;i<N_SIZE;i++){
		if(check_Matrix[i]==1){
			x=true;
		}
		if(check_Matrix[i]==2){
			o=true;
		}
	}
	if((!x & tempMaxMovesX==0) | (!o & tempMaxMovesO==0)){
		return true;
	}
	if(tempMaxMovesX<3 & tempMaxMovesO<3){
		document.getElementById('turn').textContent='The game is draw';

		boxes.forEach(function (square){// learn
		square.removeEventListener('click',set);//clicking event is removed
		})
	}
	return false;
}

function set(){
	if(tempCheck){
		if(this.innerHTML !=EMPTY){
			if(this.innerHTML==turn ){
				console.log(this);
				check_Matrix[this.identifier]=0;
				
				this.innerHTML=EMPTY;
				if(turn=='X'){
					movesX -=1;
					tempMaxMovesX-=1;
				}
				else{
					movesO -=1;
					tempMaxMovesO-=1;
				}
				
				if(finalWin()){
					turn = turn === 'X' ? 'O' : 'X';
					document.getElementById('turn').textContent='Player '+turn+' is the WINNER';

					boxes.forEach(function (square){// learn
					square.removeEventListener('click',set);//clicking event is removed
					})
				}
				else{
					document.getElementById('turn').textContent='Player '+turn;
				}
				tempCheck=false;
				
			}
			else{
				document.getElementById('turn').textContent='Select Opponents Box';
			}
		}
		else{
			document.getElementById('turn').textContent='Select Opponents Box';
		}
	}
	else{
	if(this.innerHTML !=EMPTY){

		if((turn=='X' & movesX==tempMaxMovesX) | (turn=='O' & movesO==tempMaxMovesO)){
			if(this.innerHTML==turn ){
				
				if(this.identifier==0 &(check_Matrix[1]==0 | check_Matrix[3]==0 | check_Matrix[9]==0)){
					
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
					
					
				}
				else if(this.identifier==1 &(check_Matrix[0]==0 | check_Matrix[2]==0 | check_Matrix[4]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
					
				}
				else if(this.identifier==2 &(check_Matrix[1]==0 | check_Matrix[5]==0 | check_Matrix[14]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
					
				}
				else if(this.identifier==3 &(check_Matrix[0]==0 | check_Matrix[4]==0 | check_Matrix[6]==0 | check_Matrix[10]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
				}
				else if(this.identifier==4 &(check_Matrix[1]==0 | check_Matrix[3]==0 | check_Matrix[5]==0 | check_Matrix[7]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
				}
				else if(this.identifier==5 &(check_Matrix[2]==0 | check_Matrix[4]==0 | check_Matrix[8]==0 | check_Matrix[13]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
				}
				else if(this.identifier==6 &(check_Matrix[3]==0 | check_Matrix[7]==0 | check_Matrix[11]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
				}
				else if(this.identifier==7 &(check_Matrix[4]==0 | check_Matrix[6]==0 | check_Matrix[8]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
				}
				else if(this.identifier==8 &(check_Matrix[5]==0 | check_Matrix[7]==0 | check_Matrix[12]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
				}
				else if(this.identifier==9 &(check_Matrix[0]==0 | check_Matrix[10]==0 | check_Matrix[21]==0)){
					
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
				}
				else if(this.identifier==10 &(check_Matrix[3]==0 | check_Matrix[9]==0 | check_Matrix[11]==0 | check_Matrix[18]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
				}
				else if(this.identifier==11 &(check_Matrix[6]==0 | check_Matrix[10]==0 | check_Matrix[15]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
				}
				else if(this.identifier==12 &(check_Matrix[8]==0 | check_Matrix[13]==0 | check_Matrix[17]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
				}
				else if(this.identifier==13 &(check_Matrix[5]==0 | check_Matrix[12]==0 | check_Matrix[14]==0 | check_Matrix[20]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
				}
				else if(this.identifier==14 &(check_Matrix[2]==0 | check_Matrix[13]==0 | check_Matrix[23]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
				}
				else if(this.identifier==15 &(check_Matrix[11]==0 | check_Matrix[16]==0 | check_Matrix[18]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
				}
				else if(this.identifier==16 &(check_Matrix[15]==0 | check_Matrix[17]==0 | check_Matrix[19]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
				}
				else if(this.identifier==17 &(check_Matrix[12]==0 | check_Matrix[16]==0 | check_Matrix[20]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
				}
				else if(this.identifier==18 &(check_Matrix[10]==0 | check_Matrix[15]==0 | check_Matrix[19]==0 | check_Matrix[21]==0)){
					
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
				}
				else if(this.identifier==19 &(check_Matrix[16]==0 | check_Matrix[18]==0 | check_Matrix[20]==0 | check_Matrix[22]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
				}
				else if(this.identifier==20 &(check_Matrix[13]==0 | check_Matrix[17]==0 | check_Matrix[19]==0 | check_Matrix[23]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
				}
				else if(this.identifier==21 &(check_Matrix[9]==0 | check_Matrix[18]==0 | check_Matrix[22]==0 )){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
				}
				else if(this.identifier==22 &(check_Matrix[19]==0 | check_Matrix[21]==0 | check_Matrix[23]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
				}
				else if(this.identifier==23 &(check_Matrix[14]==0 | check_Matrix[20]==0 | check_Matrix[22]==0)){
					console.log(this);
					check_Matrix[this.identifier]=0;
					
					this.innerHTML=EMPTY;
					if(turn=='X'){
						movesX-=1;
						prev_EraseX=this.identifier;
					}
					else{
						movesO-=1;
						prev_EraseO=this.identifier;
					}
				}
				else{
					document.getElementById('turn').textContent='Select Another Box That Can Move';					
				}
				
			}
			else{
				document.getElementById('turn').textContent='Select Your Own Box';
			}
		}
		else{
			document.getElementById('turn').textContent='Click On Empty Box';	
		}
	
	}
	else{
		if((turn=='X' & movesX<tempMaxMovesX) | (turn=='O' & movesO<tempMaxMovesO)){
			if((turn=='X' & prev_EraseX==-1) | (turn=='O' & prev_EraseO==-1)){
				console.log(this);
				this.innerHTML=turn;
				
				if(turn=='X'){
					check_Matrix[this.identifier]=1;
					movesX+=1;
				}
				else{
					check_Matrix[this.identifier]=2;
					movesO+=1;
				}
				
				document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
				if(win(turn)){
					
					tempCheck=true;

					
					document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
					turn = turn === 'X' ? 'O' : 'X';

				}
				else{
					turn = turn === 'X' ? 'O' : 'X';
					document.getElementById('turn').textContent='Player '+turn;
				}
			}
			else{
				if(((turn=='X' & prev_EraseX==0) | (turn=='O' & prev_EraseO==0)) &(this.identifier==1 | this.identifier==3 | this.identifier==9)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(((turn=='X' & prev_EraseX==1) | (turn=='O' & prev_EraseO==1)) &(this.identifier==0 | this.identifier==2 | this.identifier==4)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(((turn=='X' & prev_EraseX==2) | (turn=='O' & prev_EraseO==2)) &(this.identifier==1 | this.identifier==5 | this.identifier==14)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(((turn=='X' & prev_EraseX==3) | (turn=='O' & prev_EraseO==3)) &(this.identifier==0 | this.identifier==4 | this.identifier==6 | this.identifier==10)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(((turn=='X' & prev_EraseX==4) | (turn=='O' & prev_EraseO==4)) &(this.identifier==1 | this.identifier==3 | this.identifier==5 | this.identifier==7)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(((turn=='X' & prev_EraseX==5) | (turn=='O' & prev_EraseO==5)) &(this.identifier==2 | this.identifier==4 | this.identifier==8 | this.identifier==13)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(((turn=='X' & prev_EraseX==6) | (turn=='O' & prev_EraseO==6)) &(this.identifier==3 | this.identifier==7 | this.identifier==11)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(((turn=='X' & prev_EraseX==7) | (turn=='O' & prev_EraseO==7)) &(this.identifier==4 | this.identifier==6 | this.identifier==8)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(((turn=='X' & prev_EraseX==8) | (turn=='O' & prev_EraseO==8)) &(this.identifier==5 | this.identifier==7 | this.identifier==12)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}

				else if(((turn=='X' & prev_EraseX==9) | (turn=='O' & prev_EraseO==9)) &(this.identifier==0 | this.identifier==10 | this.identifier==21)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(((turn=='X' & prev_EraseX==10) | (turn=='O' & prev_EraseO==10)) &(this.identifier==3 | this.identifier==9 | this.identifier==11 | this.identifier==18)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(((turn=='X' & prev_EraseX==11) | (turn=='O' & prev_EraseO==11)) &(this.identifier==6 | this.identifier==10 | this.identifier==15 )){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(((turn=='X' & prev_EraseX==12) | (turn=='O' & prev_EraseO==12)) &(this.identifier==8 | this.identifier==13 | this.identifier==17)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(((turn=='X' & prev_EraseX==13) | (turn=='O' & prev_EraseO==13)) &(this.identifier==5 | this.identifier==12 | this.identifier==14 | this.identifier==20)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(((turn=='X' & prev_EraseX==14) | (turn=='O' & prev_EraseO==14)) &(this.identifier==2 | this.identifier==13 | this.identifier==23)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(((turn=='X' & prev_EraseX==15) | (turn=='O' & prev_EraseO==15)) &(this.identifier==11 | this.identifier==16 | this.identifier==18)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(((turn=='X' & prev_EraseX==16) | (turn=='O' & prev_EraseO==16)) &(this.identifier==15 | this.identifier==17 | this.identifier==19)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}

				else if(((turn=='X' & prev_EraseX==17) | (turn=='O' & prev_EraseO==17)) &(this.identifier==12 | this.identifier==16 | this.identifier==20)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(((turn=='X' & prev_EraseX==18) | (turn=='O' & prev_EraseO==18)) &(this.identifier==10 | this.identifier==15 | this.identifier==19 | this.identifier==21)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(((turn=='X' & prev_EraseX==19) | (turn=='O' & prev_EraseO==19)) &(this.identifier==16 | this.identifier==18 | this.identifier==20 | this.identifier==22)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(((turn=='X' & prev_EraseX==20) | (turn=='O' & prev_EraseO==20)) &(this.identifier==13 | this.identifier==17 | this.identifier==19 | this.identifier==23)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(((turn=='X' & prev_EraseX==21) | (turn=='O' & prev_EraseO==21)) &(this.identifier==9 | this.identifier==18 | this.identifier==22)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(((turn=='X' & prev_EraseX==22) | (turn=='O' & prev_EraseO==22)) &(this.identifier==19 | this.identifier==21 | this.identifier==23)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}
				else if(((turn=='X' & prev_EraseX==23) | (turn=='O' & prev_EraseO==23)) &(this.identifier==14 | this.identifier==20 | this.identifier==22)){
					console.log(this);
					this.innerHTML=turn;
					
					if(turn=='X'){
						check_Matrix[this.identifier]=1;
						movesX+=1;
					}
					else{
						check_Matrix[this.identifier]=2;
						movesO+=1;
					}
					document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
					if(win(turn)){
		
						tempCheck=true;

						
						document.getElementById('turn').textContent='Player '+turn+' remove one element of opposite';
						turn = turn === 'X' ? 'O' : 'X';
		
	
					}
					else{
						turn = turn === 'X' ? 'O' : 'X';
						document.getElementById('turn').textContent='Player '+turn;
					}
				}

				else{
					document.getElementById('turn').textContent='Select A Neighbour Of Erased Box';			
				}
				
			}


		}
		else{
		
				document.getElementById('turn').textContent='Select Your Own Block To Next Move';

			
		}
	}
}
document.getElementById('cnt').textContent='X='+ movesX +'/'+ tempMaxMovesX +', O='+ movesO +'/'+tempMaxMovesO;
}


init();


