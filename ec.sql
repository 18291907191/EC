# Host: localhost  (Version: 5.5.53)
# Date: 2018-05-14 08:20:08
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "admin"
#

DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `username` varchar(20) NOT NULL DEFAULT '' COMMENT '管理员账号',
  `userpass` varchar(16) NOT NULL DEFAULT '' COMMENT '管理员密码',
  `usersex` char(2) DEFAULT NULL COMMENT '管理员性别',
  `usertell` varchar(11) DEFAULT NULL COMMENT '管理员电话',
  `userfullname` varchar(10) DEFAULT NULL COMMENT '管理员名字',
  `userlevel` varchar(10) NOT NULL DEFAULT '' COMMENT '管理员等级',
  `useremail` varchar(100) DEFAULT NULL COMMENT '管理员邮箱',
  `createtime` varchar(100) DEFAULT '暂未记录' COMMENT '创建用户的时间',
  `userip` varchar(255) DEFAULT '10.15.161.105' COMMENT '管理员登录 ip地址',
  `truefalse` int(1) NOT NULL DEFAULT '1' COMMENT '管理员禁用与开启',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=63 DEFAULT CHARSET=utf8;

#
# Data for table "admin"
#

/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'admin','123','男','18888888888','狗尾草','超级管理员','1748910489@qq.com','暂未记录','10.35.161.105',1),(2,'renjiahui','123','女','15555555555','任嘉辉','超级管理员',NULL,'暂未记录','10.15.161.105',1),(3,'dinghan','123','男','14444444444','丁菡','超级管理员',NULL,'暂未记录','10.15.161.105',1),(4,'xuhui','123','男','13333333333','徐辉','超级管理员',NULL,'暂未记录','10.15.161.105',1),(5,'editor','12345','男','17777777777','鼠尾草','产品编辑管理员','2997324224@qq.com','暂未记录','10.35.161.105',1),(6,'general','123456','女','16666666666','彼岸花','普通管理员','2437056262@qq.com','暂未记录','10.35.161.105',1);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

#
# Structure for table "goodsinfo"
#

DROP TABLE IF EXISTS `goodsinfo`;
CREATE TABLE `goodsinfo` (
  `id` int(1) NOT NULL AUTO_INCREMENT COMMENT '商品编号',
  `goodsname` varchar(30) NOT NULL,
  `goodscount` int(11) DEFAULT NULL,
  `goodsprice` float DEFAULT NULL,
  `goodsdescripe` varchar(100) DEFAULT NULL,
  `goodsbrand` varchar(30) DEFAULT NULL,
  `goodsaddress` varchar(30) DEFAULT NULL,
  `goodsimg` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

/*!40000 ALTER TABLE `goodsinfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `goodsinfo` ENABLE KEYS */;

#
# Structure for table "member"
#

DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL DEFAULT '' COMMENT '用户名',
  `userpass` varchar(30) NOT NULL DEFAULT '' COMMENT '用户密码',
  `usersex` char(2) NOT NULL DEFAULT '' COMMENT '用户性别',
  `usertell` varchar(11) DEFAULT NULL,
  `useremail` varchar(30) DEFAULT NULL COMMENT '用户邮箱',
  `useraddress` varchar(100) NOT NULL DEFAULT '' COMMENT '用户地址',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='商城会员';

#
# Data for table "member"
#

/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (1,'renjiahui','1748','女','17481231231',NULL,'南窑国际');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
