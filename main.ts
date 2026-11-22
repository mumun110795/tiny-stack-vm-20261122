import{readFileSync as R,writeFileSync as W,mkdirSync as M,readdirSync as D}from"node:fs";
let run=(p,n)=>{
let s=[],c=[],m=new Int32Array(256),o=[],q=0,g=0,t=0,F=Math.trunc,
T=e=>{throw e},N=e=>{if(s.length<e)T(2)},U=v=>{if(s.length>255)T(3);s.push(v|0)};
try{for(;;){
if(t>=1e6)T(10);
if(q<0||q>=p.length)T(9);
let e=p[q],i=e==1?1:e==2?4:e>47&&e<52?2:0;
if(!(e<8||e>15&&e<31||e>31&&e<35||e>47&&e<53||e==64||e==65||e>79&&e<84))T(5);
if(q+1+i>p.length)T(9);
t++;
let j=i==2?p.readInt16LE(q+1):0,k=i==2?p.readUInt16LE(q+1):0,x=q+1+i;
q=x;
if(e==0)T(0);
else if(e==1)U((p[q-1]<<24)>>24);
else if(e==2)U(p.readInt32LE(q-4));
else if(e==3){N(1);s.pop()}
else if(e==4){N(1);U(s[s.length-1])}
else if(e==5){N(2);let l=s.length,y=s[l-1];s[l-1]=s[l-2];s[l-2]=y}
else if(e==6){N(2);U(s[s.length-2])}
else if(e==7){N(3);let l=s.length,y=s[l-3];s[l-3]=s[l-2];s[l-2]=s[l-1];s[l-1]=y}
else if(e==23){N(1);U(-s.pop())}
else if(e==27){N(1);U(~s.pop())}
else if(e>15&&e<31||e>31&&e<35){N(2);let b=s.pop(),a=s.pop();if(e>18&&e<23&&!b)T(4);U(e==16?a+b:e==17?a-b:e==18?Math.imul(a,b):e==19?F(a/b):e==20?a%b:e==21?F((a>>>0)/(b>>>0)):e==22?(a>>>0)%(b>>>0):e==24?a&b:e==25?a|b:e==26?a^b:e==28?a<<b:e==29?a>>b:e==30?a>>>b:e==32?a==b?1:0:e==33?a<b?1:0:(a>>>0)<(b>>>0)?1:0)}
else if(e==48)q=x+j;
else if(e==49){N(1);s.pop()||(q=x+j)}
else if(e==50){N(1);s.pop()&&(q=x+j)}
else if(e==51){if(c.length>63)T(7);c.push(x);q=k}
else if(e==52){if(!c.length)T(8);q=c.pop()}
else if(e==64){N(1);let a=s.pop();if(a<0||a>255)T(6);U(m[a])}
else if(e==65){N(2);let a=s.pop();if(a<0||a>255)T(6);m[a]=s.pop()}
else if(e==80){N(1);let v=""+s.pop();if(o.length+v.length>65536)T(11);for(let z of v)o.push(z.charCodeAt(0))}
else if(e==81){N(1);if(o.length>65535)T(11);o.push(s.pop()&255)}
else if(e==82)U(g<n.length?n[g++]:-1);
else if(e==83){N(1);T(s.pop()&255)}
}}catch(e){if(typeof e=="number")return[Buffer.from(o),e];throw e}
};
for(let d of D("/input")){let p=R("/input/"+d+"/program.bin"),n=R("/input/"+d+"/input.bin"),[o,e]=run(p,n);M("/output/"+d,{recursive:true});W("/output/"+d+"/stdout.bin",o);W("/output/"+d+"/exit.txt",""+e)}
