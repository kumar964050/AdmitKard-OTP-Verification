create table if not exists inventory (
    itemId INT PRIMARY KEY AUTO_INCREMENT,
    itemName varchar(255),
    quantity INT,
    supplier varchar(255)
);