<h3>Install Ubuntu in Windows</h3>

<h4>Prepare:</h4>
<h4>UltraISO: write Ubuntu iso to flash disk</h4>
	1. open iso file
	2. bootable -> Write Disk Image
		2.1. write method: USB-HDD+
		2.2. Xpress Boot: Write new disk MBR -> USB-HDD+
		2.3. Write new drive boot sector -> Syslinux
	3. Write

Installing:
	1. install option: other

	2. partition:
		1. /: primary partition
		2. /boot: 200M, 
		3. SWAP: 2000M, 
	   *4. Device for boot load installation: /boot
	
		1）新分区的类型:	"主分区",
		新建分区容量:		20000MB
		新分区的位置:		"起始"
		用于: 				"Ext4 日志文件系统"
		挂载点:				"/"

		2）创建交换空间
		新分区的类型:	"逻辑分区"
		新建分区容量:	2000MB,
		新分区的位置:	按默认选“起始”
		用于:			后面选择“交换空间”
		
		3）创建“/home”分区
		新分区的类型:	逻辑分区
		新建分区容量:	剩余的空间
		新分区的位置:	起始
		用于:			"Ext4 日志文件系统"
		挂载点:			/home

		4）创建“/boot”分区
		新分区的类型:	逻辑分区
		新建分区容量:	200M
		新分区的位置:	起始
		用于:			"Ext4 日志文件系统"
		挂载点:			/boot。


after installing
set boot by using easyBCD
easyBCD:
	1. add new entry -> Linux/BSD
	2. Type: GRUB
	3. Drive: /boot partition
	4. add entry



install npm
1. install g++
	$ sudo apt-get install g++
2. download "tar.gz" source file package
3. unzip source file
	$ tar zxvf node-v0.12.2.tar.gz
4. cd source file
5. install package
	$ ./configure
	$ make
	$ sudo make install
	$ node --version


install sublime
1. download "tar.bz2" package
2. unzip file
	$ tar -xvf Sublime\ Text\ 2.0.2\ x64.tar.bz2
3. move the file directory to /usr/local/lib
	$ sudo mv Sublime\ Text\ 2 /usr/local/lib
4. set shortcut link
	$ sudo ln -s /usr/local/lib/Sublime\ Text\ 2/sublime_text /usr/bin/sublime
5. install zen coding
	5.1 install package control
		ctrl+' or view -> show console
		paste:
			import urllib2,os,hashlib; h = 'eb2297e1a458f27d836c04bb0cbaf282' + 'd0e7a3098092775ccb37ca9d6b2e4b7d'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')

	5.2 restart sublime
	5.3 call the package control panel
		Ctrl + Shift + P
	5.4 install package
	5.5 emmet
6. set hot-key
	6.1 reindent:
		Preferences -> Key Bindings-User
		{ "keys": ["ctrl+alt+f"], "command": "reindent" }


install chrome
	1. download ".deb" file
	2. double click to install


install express
	1. sudo npm install express -gd
	2. npm install express-generator -g
	3. reboot system

set root password
	1. sudo passwd root

switch to root
	$ sudo su

ubuntu install
	1. sudo apt-get install filename

ubuntu uninstall
	1. sudo apt-get remove filename
	2. sudo apt-get autoremove

ubuntu
	mkdir 目录名         => 创建一个目录
	rmdir 空目录名      => 删除一个空目录
	rm 文件名 文件名   => 删除一个文件或多个文件
	rm –rf 非空目录名 => 删除一个非空目录下的一切
	touch 文件名        => 创建一个空文件

	mv file1 file2    => 将文件file1，更改文件名为 file2。
	mv file1 dir1    => 将文件 file1，移到目录 dir1下，文件名仍为 file1。
	mv dir1 dir2    => 若目录 dir2 存在，则将目录 dir1，及其所有文件和子目录，移到目录 dir2 下，新目录名称为 dir1。若目录 dir2 不存在，则将dir1，及其所有文件和子目录，更改为目录 dir2。


Git
	1. install & config
		1.1 install
			$ sudo apt-get install git

		1.2 set user information
			$ git config --global user.name "nicoson"
			$ git config --global user.email "nicoson@163.com"

		1.3 Authenticating with GitHub
			1.3.1 check for SSH keys (id_rsa.pub)
				$ ls -al ~/.ssh

			1.3.2 if not, generate a new SSH key
				$ ssh-keygen -t rsa -C "nicoson@163.com"
				(press 'Enter', no need to set passphrase)

					Enter file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]
					Enter passphrase (empty for no passphrase): [Type a passphrase]
					Enter same passphrase again: [Type passphrase again]
					Your identification has been saved in /Users/you/.ssh/id_rsa.
					Your public key has been saved in /Users/you/.ssh/id_rsa.pub.
					The key fingerprint is:
					01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db your_email@example.com

			1.3.3 get two keys
				/home/nxh/.ssh/id_rsa
				id_rsa: private key
				id_rsa.pub: public key
		
			1.3.4 login GitHub to finish the authenticating
				(1) Account settings -> SSH Keys
				(2) Fill in the title as you wish
				(3) paste the public key


	2. usage
		2.1 set remote repository
			2.1.1 login GitHub
				(1) Create a new repo
				(2) input repo name
				(3) keep default set
				(4) create repository
				(5) copy SSH

		2.2 set local repository
			2.2.1 create local repository
				$ git init

			2.2.2 add files
				$ git add filename

			2.2.3 submit to repository
				$ git commit -m "comments xxxxxx"

			2.2.4 update to the remote repository
				2.2.4.1 connect to the remote repository (for the first time)
					$ git remote add origin git@github.com:nicoson/xxxxx.git
				
				2.2.4.2 push repository
					$ git push -u origin master
			
			2.2.5 change the remote repository
				$ git remote set-url origin git@github.com:nicoson/xxxxx.git

			2.2.6 chech the status
				$ git status



MySQL
	1. installation
		$ sudo apt-get install mysql-server

	2. test connection
		$ sudo netstat -tap | grep mysql

	3. login mysql
		$mysql -uusername -ppassword
		note: no space between u and username.

	4. commands:
		1.终端启动MySQL：/etc/init.d/mysql start；(stop, restart)
		2.登录MySQL：mysql -uroot -ppwd (用root账户登录),然后输入密码；
		3.show databases;		//show all database
		4.use database_name;	// choose to enter a database
		5.show tables;			// show all the table under current database
			show tables from db_name;	// show the table from other database
			show columns from table_name;	// show the schema of the table

		6.  create database database_name;	// create database
			create database database_name character set = utf8;	// set the character set when creating database
			alter database database_name character set = utf8;
			show create database database_name;	// show character set (utf8)

		7.drop database database_name;		// delete database

		8.create table table_name(
				column_name data_type primary key,
				column_name data_type not null / null,
				...
			);

			primary key
			unique key
			default
			null / not null

		9.drop table table_name;	// delete a table

		10. insert into table_name values(value1, value2);	// insert the whole piece
			insert into table_name(col1,col2) values(value1,value2);	// insert for specific column

		11.SQL更新语句：update table_name set col1='value1',col2='value2' where where_definition;
		12.SQL查询语句：select * from table_name where.......(最复杂的语句)
		13.SQL删除语句：delete from table_name where...

		14.增加表结构的字段：alert table table_name add column field1 date ,add column field2 time...
		
		15.删除表结构的字段：alert table table_name drop field1;
		17.limit 的使用：select * from table_name limit 3；//每页只显示3行
		select * from table_name limit 3,4 //从查询结果的第三个开始，显示四项结果。
		此处可很好的用来作分页处理。
		18.对查询结果进行排序: select * from table_name order by field1,orderby field2;多重排序
		19.退出MySQL:exit;

		
		backup
		$ mysqldump -uxxxx -pxxxx database_name > \home\xxx\database_name.sql
