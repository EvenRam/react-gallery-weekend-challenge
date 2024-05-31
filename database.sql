CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.'),
('images/goat_stache.png', 'Goat Stache!', 'Photo of a mustachioed goat taken at Glacier National Park.');
('images/AK_Eagle.jpeg', 'Eagle!', 'Photo of an egale in Ketchikan, Alaska')
('images/AK.jpeg', 'Alaska' 'Photo of the moutain top view n Ketchikan, Alaska')
('images/El_Paso.jpeg', 'Mountain Hike', ' A photo of the sunset from a mountain in El Paso Texas')
('images/Rainbow.jpeg','RainBow', 'Photo of Zues and a Rainbow in Farmington MN')
('images/Stairs.jpeg','Stais','Photo of stairs with a beautiful phrase, Domincan Republic')
('images/Zeus.jpeg', 'Zeus', 'Photo of my dog in Ketchikan AK at the beach')