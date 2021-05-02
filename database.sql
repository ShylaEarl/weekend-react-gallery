--database name
react_gallery

CREATE TABLE "gallery" (
"id" SERIAL PRIMARY KEY,
"path" varchar(240) not null,
"description" varchar(240) not null,
"likes" INTEGER default 0
);

INSERT INTO "gallery" ("path", "description", "likes")
VALUES ('images/Apothecary.jpg', 'A2O Apothecary Cabinet', 0),
('images/Bathroom.jpg', 'Plant, art, crystal display', 0),
('images/Cacti.jpg', 'Cacti and crystal dispaly', 0),
('images/Crystals.jpg', 'Assortment of crystals', 0),
('images/StagheadFern.jpg', 'Staghead fern', 0);

--GET Query
SELECT * FROM "gallery";

--POST Query
INSERT INTO "gallery" ("path", "description") VALUES ($1, $2);

--PUT Query
UPDATE "gallery" SET "likes" = likes + 1 WHERE id=$1;

--DELETE Query
DELETE FROM "gallery" WHERE id=$1;


