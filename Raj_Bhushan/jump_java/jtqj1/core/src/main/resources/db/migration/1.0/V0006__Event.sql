create table Event( id BIGINT NOT NULL AUTO_INCREMENT,
modificationCounter INTEGER NOT NULL,
eventName VARCHAR(255),
logo VARCHAR(255),
description VARCHAR(255),
currentNumber VARCHAR(255),
 attentionTime BIGINT,
  customers INTEGER NOT NULL DEFAULT '0',
   CONSTRAINT PK_Event PRIMARY KEY(id) );