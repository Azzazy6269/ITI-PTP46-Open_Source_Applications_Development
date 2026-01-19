use sakila

-- ---------1
drop function if exists ConcatName
DELIMITER /
create function ConcatName (id int)
returns varchar(50)
reads sql data
begin
declare fullname varchar(50);
select concat(first_name," ",last_name) into fullName
from actor
where actor_id = id;
return fullName;
end /
DELIMITER ;

select ConcatName(2) ;
select actor_id , ConcatName(actor_id) from actor order by actor_id asc;

-- ---------2
drop function if exists total_count_of_rentals ;
DELIMITER /
create function total_count_of_rentals (id int)
returns int
reads sql data
begin
declare total int;
select count(*)
into total
from rental 
where customer_id = id
;
return total;
end /
DELIMITER ;

select * from customer;
select total_count_of_rentals(1);
select customer_id , total_count_of_rentals(customer_id) from customer;


-- -----------3
drop function if exists decimal_into_string 
DELIMITER /
create function decimal_into_string(a decimal)
RETURNS varchar(20)
deterministic
begin
declare result varchar(20);
select concat("$",cast(a as char)) into result;
return result;
end /
DELIMITER ;
select decimal_into_string(22.30);
select payment_id,decimal_into_string(amount) from payment;

select * from address;
-- -----------4(solution to search for one customer info & solution to search for all customers' info)
drop procedure if exists customer_info 
DELIMITER /
create procedure customer_info(in cust_id int)
begin
select concat(c.first_name,c.last_name) as fullNmae ,c.email,a.address,ci.city
from customer c
join address a on c.address_id = a.address_id
join city ci on a.city_id = ci.city_id
where cust_id = customer_id
;
end /
DELIMITER ;
call customer_info(12);

drop procedure if exists customer_info_for_all 
DELIMITER /
create procedure customer_info_for_all()
begin
select concat(c.first_name,c.last_name) as fullNmae ,c.email,a.address,ci.city
from customer c
join address a on c.address_id = a.address_id
join city ci on a.city_id = ci.city_id

;
end /
DELIMITER ;
call customer_info_for_all();

-- ---------------5
drop procedure if exists revenue_generated_in_period
DELIMITER /
create procedure revenue_generated_in_period (in start_date date,in end_date date)
begin
select str.store_id , sum(amount) from store str
join staff stf on str.store_id = stf.store_id
join payment p on p.staff_id = stf.staff_id
where p.payment_date between start_date and end_date
group by str.store_id
;
end /
DELIMITER ;
call revenue_generated_in_period('2005-05-25','2005-06-16');

-- ------------6 
drop procedure if exists film_title
DELIMITER /
create procedure film_title (in part_of_name varchar(25))
begin
select title , rating from film
where title like CONCAT('%', part_of_name, '%')
;
end/
DELIMITER ;
select * from film;
call film_title("ICAN");


-- -------------7
drop procedure if exists customer_category()
DELIMITER /
create procedure customer_category (in cust_id int)
BEGIN
    select 
        c.name AS category_name,
        COUNT(*) AS rental_count
    from rental r
    join inventory i on r.inventory_id = i.inventory_id
    join film f on i.film_id = f.film_id
    join film_category fc on f.film_id = fc.film_id
    join category c on fc.category_id = c.category_id
    where r.customer_id = cust_id
    group by c.category_id, c.name
    order by rental_count desc
    limit 1;
end /
DELIMITER ;
call customer_category(1);


-- -----------8
drop trigger if exists address_update
DELIMITER /
create trigger address_update
before update on address
for each row 
begin
set new.last_update = now();
end /
DELIMITER ;

-- --------------9
drop trigger if exists prevent_staff_username_admin
DELIMITER /
create trigger prevent_staff_username_admin
before update on staff
for each row 
begin
if new.username = 'admin' then
signal sqlstate '45000' 
set message_text = 'cant change username to admin ';
end if;
end /
DELIMITER ;
update staff
set username = 'admin'
where staff_id = 1;


-- --------------10
drop trigger if exists check_email
DELIMITER /
create trigger check_email
before insert on customer
for each row 
begin
if not (new.email like '%@%' and new.email like '%.%') then
	signal sqlstate '45000' 
	set message_text = 'Invalid email ';
end if;
end /
DELIMITER ;
insert into customer values(600,2,"ahmed","ismail","ahmedismail_gmail_com",12,1,now(),now());


-- ------------------11
drop table if exists film_price_history ;
create table film_price_history (
    history_id int auto_increment primary key,
    film_id int not null,
    old_price decimal(4,2) not null,
    new_price decimal(4,2) not null,
    change_date datetime not null
);
DELIMITER /
create trigger after_film_update
after update on film
for each row
begin
    if old.rental_rate <> new.rental_rate then
        insert into film_price_history(film_id, old_price, new_price, change_date)
        values (new.film_id, old.rental_rate, new.rental_rate, now());
    end if;
end /
DELIMITER ;

update film
set rental_rate = 5.99
where film_id = 1;
select * from film_price_history;
