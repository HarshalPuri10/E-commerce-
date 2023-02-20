create database ecommerce;
create table userRegister (
	user_id int primary key auto_increment,
    userName varchar(30) not null,
    email varchar(30) unique ,
    phone varchar(12)  not null,
    
    password varchar(20) not null
);	
create table product_details(
	product_id int auto_increment primary key,
    product_name varchar(100) not null,
    product_desc TEXT,
    price decimal(10,2) not null
);
create table user_cart(
	cart_id int auto_increment primary key, 
    user_id int not null,
    product_id int not null,
    quantity int not null,
    foreign key (user_id) references userRegister( user_id),
     foreign key (product_id) references product_details(product_id)
);