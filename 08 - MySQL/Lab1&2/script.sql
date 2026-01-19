-- 1
select title , description,length
from film 
where length > 120 
order by length desc;

-- 2
select * from film where
rental_rate in (0.99 , 2.99) 
and replacement_cost > 20 ;

-- 3
select rating,count(*) as "number of films"
from film
group by rating;

-- 4
select customer_id , count(payment_id) as num_of_payments
from payment
group by customer_id
having num_of_payments > 30;

-- 5 (two solutions with join and subqueries)
select city from city
join country on city.country_id = country.country_id
where country = "Egypt";

select city from city
where country_id in(
		select country_id from country
        where country ="Egypt"
);

-- 6 (two solutions with join and subqueries)
select f.film_id , f.title , a.first_name from film f
join film_actor fa on f.film_id = fa.film_id
join actor a on a.actor_id = fa.actor_id
order by film_id asc;

select f.film_id , f.title , a.first_name from film f
where f.film_id in (
		select fa.film_id from film_actor fa
        where fa.actor_id in (
        select a.actor_id from actor a
        )
)
order by f.film_id asc;

-- 7
select c.first_name from customer c
where customer_id in (
			select r.customer_id from rental r
            where r.return_date is null
);

-- 8
select title from film
where film.length > (
				select avg(length) from film
);

-- 9 
select first_name , last_name , email from customer
 where customer_id in(
			select customer_id from rental
            where rental_id is null
 );

-- 10
drop view if exists customer_spending_summary;
create view customer_spending_summary as
select concat(c.first_name, " " ,c.last_name) as name ,
 count(r.rental_id) as num_of_rental ,
 sum(p.amount) as total_payment
from customer c
join rental r on c.customer_id = r.customer_id
join payment p on c.customer_id = p.customer_id
group by c.customer_id
;

-- 11
select * from customer_spending_summary
where total_payment>100
order by total_payment asc;

-- Built in functions
-- 1
select upper(last_name) as LAST_NAME,
lower(first_name) as first_name
from customer;

-- 2
select replace(email,"@sakilacustomer.org","@iti-students.edu.") from customer;

-- 3
select concat(substring(description,1,50),"...") as short_summary from film;

-- 4
select concat(first_name," ",last_name) as name from customer
where month(create_date) = 2;

-- 5
select sum(amount) , quarter(payment_date) from payment
group by(quarter(payment_date));

-- 6
select rental_id, amount, case
when amount < 2 then 'Cheap'
when amount between 2 and 4.99 then 'Mid'
else 'Expensive'
end as price_category
from payment;


