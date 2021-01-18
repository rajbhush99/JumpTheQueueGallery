import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertData1609083215395 implements MigrationInterface {
    name = 'InsertData1609083215395'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO Visitor(id, username, name, phoneNumber, acceptedCommercial, acceptedTerms, userType,password) VALUES (0, 'raj@mail.com', 'raj', '9876543211', '0', '1', '1', 'raj123');`,
          );
          await queryRunner.query(
            `INSERT INTO Visitor(id, username, name, phoneNumber, acceptedCommercial, acceptedTerms, userType,password) VALUES (1, 'raja@mail.com', 'raja', '9876543211', '0', '1', '1', 'raj123');`,
          );
          await queryRunner.query(
            `INSERT INTO Visitor(id, username, name, phoneNumber, acceptedCommercial, acceptedTerms, userType,password) VALUES (2, 'krishna@mail.com', 'krishna', '9876543211', '0', '1', '1', 'raj123');`,
          );
          await queryRunner.query(
            `INSERT INTO Event (id, eventName, logo, currentNumber, startDate, endDate, minAttentionTime, customers) VALUES (11, 'Butter Cup', 'C:/logos/Day1Logo.png', 'Q001','2020-12-10 00:00:01','2008-12-15 00:00:01',null, 0);`,
          );  
          await queryRunner.query(
            `INSERT INTO Event (id, eventName, logo, currentNumber, startDate, endDate, minAttentionTime, customers) VALUES (22, 'Christmas party', 'C:/logos/Day1Logo.png', 'Q001','2020-12-10 00:00:01','2008-12-15 00:00:01',null,0);`,
          );  
          await queryRunner.query(
            `INSERT INTO Event (id, eventName, logo, currentNumber, startDate, endDate, minAttentionTime, customers) VALUES (33, 'New Year', 'C:/logos/Day1Logo.png', 'Q001','2020-12-10 00:00:01','2008-12-15 00:00:01',null, 0);`,
          );  
          await queryRunner.query(
            `INSERT INTO Event (id, eventName, logo, currentNumber, startDate, endDate, minAttentionTime, customers) VALUES (44, 'Fintech Festival', 'C:/logos/Day1Logo.png', 'Q001','2020-12-10 00:00:01','2008-12-15 00:00:01',null, 0); `,
          ); 
          await queryRunner.query(
            `INSERT INTO Event (id, eventName, logo, currentNumber, startDate, endDate, minAttentionTime, customers) VALUES (55, 'Dark Roast', 'C:/logos/Day1Logo.png', 'Q001','2020-12-10 00:00:01','2008-12-15 00:00:01',null,0);`,
          );  
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM VISITOR`);
        await queryRunner.query(`DELETE FROM EVENT`);
    }

}
