-- Inserting 1st Item
insert into inventory(itemName, quantity, supplier)
select 'Laptop', 10, 'Dell Inc.'
where not exists (select 1 from inventory where itemId=1);

-- Inserting 2nd Item
insert into inventory(itemName, quantity, supplier)
select 'Mobile Phone', 25, 'Samsung'
where not exists (select 1 from inventory where itemId=2);

-- Inserting 3rd Item
insert into inventory(itemName, quantity, supplier)
select 'Keyboard', 50, 'Logitech'
where not exists (select 1 from inventory where itemId=3);

-- Inserting 4th Item
insert into inventory(itemName, quantity, supplier)
select 'Monitor', 20, 'HP'
where not exists (select 1 from inventory where itemId=4);

-- Inserting 5th Item
insert into inventory(itemName, quantity, supplier)
select 'Mouse', 75, 'Microsoft'
where not exists (select 1 from inventory where itemId=5);