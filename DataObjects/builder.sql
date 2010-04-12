


CREATE TABLE  `builder` (
  `id` int(11)  NOT NULL AUTO_INCREMENT,
  `name` varchar(128)  NOT NULL,
  btype varchar(16)  NOT NULL,
  `json` longtext  NOT NULL,
  PRIMARY KEY (`id`)
);


ALTER TABLE `builder` ADD COLUMN `app` VARCHAR(64)  NOT NULL DEFAULT '';
ALTER TABLE `builder` ADD COLUMN `module` VARCHAR(128)  NOT NULL DEFAULT '';

CREATE TABLE `builder_app` (
  `id` int(11)  NOT NULL AUTO_INCREMENT,
  `app` varchar(64)  NOT NULL,
  `davurl` varchar(128)  NOT NULL,
  `davwrite` int(1)  NOT NULL,
  PRIMARY KEY (`id`)
);
ALTER TABLE builder_app CHANGE COLUMN davwrite davwrite int(2)  NOT NULL DEFAULT 0;


CREATE TABLE  `translations` (
  `id` int(11)  NOT NULL AUTO_INCREMENT,
  `module` varchar(64)  NOT NULL,
  tfile varchar(128) NOT NULL,
  tlang varchar(8)  NOT NULL,
  tkey varchar(32)  NOT NULL,
  tval longtext  NOT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE translations ADD INDEX qlookup (module, tfile, tlang, tkey);