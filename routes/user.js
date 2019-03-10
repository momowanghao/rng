//引入上一级目录下的mysql连接池对象
const pool=require('../pool.js');
const express=require('express');
//创建空路由器
var router=express.Router();
//添加路由
//1.用户注册
router.post("/register",(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $email=req.body.email;
	var $phone=req.body.phone;
	var $user_name=req.body.user_name;
	var $gender=req.body.gender;
	if(!$uname){
		res.send("用户名不存在");
		return;
	}
	if(!$upwd){
		res.send("密码不存在");
		return;
	}
	if(!$email){
		res.send("邮箱不存在");
		return;
	}
	if(!$phone){
		res.send("phone不存在");
		return;
	}
	if(!$user_name){
		res.send("user_name不存在");
		return;
	}	
	var sql="insert into xz_user values(null,?,?,?,?,null,?,?)";
	pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender],(err,result)=>{
		if(err) throw err;
		res.send("1");
	});
});
//2.用户登录路由
//url：/login  method：post
//创建路由，获取请求的数据，验证数据为空
//401 'uname required'
//402 'upwd required'
router.post('/login',(req,res)=>{
  var obj=req.body;
  //验证数据是否为空
  var $uname=obj.uname;
  var $upwd=obj.upwd;
  if(!$uname){
    res.send({code:401,msg:'uname required'});
	return;
  }
  if(!$upwd){
    res.send({code:402,msg:'upwd required'});
	return;
  }
  //执行SQL语句，查看是否登录成功（使用用户名和密码两个条件能查询到数据）
  pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[$uname,$upwd],(err,result)=>{
    if(err) throw err;
	//判断查询的结果（数组）长度是否大于0
	//如果大于0，说明查询到数据，有这个用户登录成功
	if(result.length>0){
	  res.send({code:1,msg:'登录成功'});
	}else{
	  res.send({code:0,msg:'用户名或密码错误'});
	}
  });
});

//导出路由器
module.exports=router;