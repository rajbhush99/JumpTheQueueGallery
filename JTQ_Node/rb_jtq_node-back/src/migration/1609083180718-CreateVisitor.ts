import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateVisitor1609083180718 implements MigrationInterface {
    name = 'CreateVisitor1609083180718'

    public async up(queryRunner: QueryRunner): Promise<void> {
      //  await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "username" varchar(255) NOT NULL, "password" varchar(255) NOT NULL, "role" integer NOT NULL DEFAULT (0))`);
   await queryRunner.query(`create table "Visitor"(
        "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
        "version" integer NOT NULL DEFAULT (1),
         "createdAt" datetime NOT NULL DEFAULT (datetime('now')), 
        "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
          "username" VARCHAR(255),
          "name" VARCHAR(255),
          "phoneNumber" VARCHAR(255),
          "acceptedCommercial" BOOL DEFAULT '0',
          "acceptedTerms" BOOL NOT NULL DEFAULT '0',
          "userType" BOOL DEFAULT '0',
           "password" VARCHAR(255)
          )`); 
    await queryRunner.query( `CREATE TABLE "Event"
          ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
          "version" integer NOT NULL DEFAULT (1), 
          "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
          "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
          "eventName" varchar(255) NOT NULL,
          "logo" varchar(255) NOT NULL, 
          "description" varchar(255) ,
          "currentNumber" varchar(255) NOT NULL,
          "startDate" datetime NOT NULL,
           "endDate"  datetime NOT NULL, 
           "minAttentionTime" datetime ,
           "customers" integer NOT NULL DEFAULT (0))`);
    
     await queryRunner.query(`CREATE TABLE "Queue_Detail"
           ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
            "version" integer NOT NULL DEFAULT (1), 
            "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
            "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
            "queueNumber" varchar(255) NOT NULL,
            "startTime" datetime NOT NULL,
            "endTime"  datetime NOT NULL, 
            "minEstimatedTime" datetime ,
           "idVisitor" integer ,
            "idEvent" integer ,
            FOREIGN KEY(idVisitor) REFERENCES Visitor(id),
            FOREIGN KEY(idEvent) REFERENCES Event(id))`);
    }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Visitor"`);
        await queryRunner.query(`DROP TABLE "Event"`);
        await queryRunner.query(`DROP TABLE "QueueDetail"`);
    }

}
