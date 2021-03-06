
SET search_path = public, pg_catalog;
DROP INDEX IF EXISTS public."Ref24";
DROP INDEX IF EXISTS public."Ref32";
DROP INDEX IF EXISTS public."Ref43";
DROP INDEX IF EXISTS public."Ref11";
DROP TABLE IF EXISTS public.rent;
DROP TABLE IF EXISTS public.run;
DROP TABLE IF EXISTS public.run_type;
DROP TABLE IF EXISTS public.car;
DROP TABLE IF EXISTS public.owner_car_tax;
SET check_function_bodies = false;
--
-- Structure for table owner_car_tax (OID = 73331) :
--
CREATE TABLE public.owner_car_tax (
    id_owner_car_tax integer NOT NULL,
    owner_name char(40) NOT NULL,
    identification char(11) NOT NULL,
    address text NOT NULL,
    phone text NOT NULL,
    email text NOT NULL
)
WITH (oids = false);
--
-- Structure for table car (OID = 73339) :
--
CREATE TABLE public.car (
    id_car integer NOT NULL,
    pictures text NOT NULL,
    plate char(10) NOT NULL,
    model char(40) NOT NULL,
    price double precision NOT NULL,
    car_code char(15) NOT NULL,
    id_owner_car_tax integer NOT NULL,
    confort text NOT NULL
)
WITH (oids = false);
--
-- Structure for table run_type (OID = 73352) :
--
CREATE TABLE public.run_type (
    id_run_type integer NOT NULL,
    run_type_name char(40) NOT NULL
)
WITH (oids = false);
--
-- Structure for table run (OID = 73357) :
--
CREATE TABLE public.run (
    id_run integer NOT NULL,
    run_code char(14) NOT NULL,
    run_price double precision NOT NULL,
    id_run_type integer NOT NULL,
    id_car integer NOT NULL
)
WITH (oids = false);
--
-- Structure for table rent (OID = 73372) :
--
CREATE TABLE public.rent (
    id_run integer NOT NULL,
    conditions text NOT NULL
)
WITH (oids = false);
--
-- Definition for index Ref11 (OID = 73385) :
--
CREATE INDEX "Ref11" ON car USING btree (id_owner_car_tax);
--
-- Definition for index Ref43 (OID = 73386) :
--
CREATE INDEX "Ref43" ON rent USING btree (id_run);
--
-- Definition for index Ref32 (OID = 73387) :
--
CREATE INDEX "Ref32" ON run USING btree (id_run_type);
--
-- Definition for index Ref24 (OID = 73388) :
--
CREATE INDEX "Ref24" ON run USING btree (id_car);
--
-- Definition for index owner_car_tax_pkey (OID = 73337) :
--
ALTER TABLE ONLY owner_car_tax
    ADD CONSTRAINT owner_car_tax_pkey
    PRIMARY KEY (id_owner_car_tax);
--
-- Definition for index car_pkey (OID = 73345) :
--
ALTER TABLE ONLY car
    ADD CONSTRAINT car_pkey
    PRIMARY KEY (id_car);
--
-- Definition for index Refowner_car_tax1 (OID = 73347) :
--
ALTER TABLE ONLY car
    ADD CONSTRAINT "Refowner_car_tax1"
    FOREIGN KEY (id_owner_car_tax) REFERENCES owner_car_tax(id_owner_car_tax);
--
-- Definition for index run_type_pkey (OID = 73355) :
--
ALTER TABLE ONLY run_type
    ADD CONSTRAINT run_type_pkey
    PRIMARY KEY (id_run_type);
--
-- Definition for index run_pkey (OID = 73360) :
--
ALTER TABLE ONLY run
    ADD CONSTRAINT run_pkey
    PRIMARY KEY (id_run);
--
-- Definition for index Refrun_type2 (OID = 73362) :
--
ALTER TABLE ONLY run
    ADD CONSTRAINT "Refrun_type2"
    FOREIGN KEY (id_run_type) REFERENCES run_type(id_run_type);
--
-- Definition for index Refcar4 (OID = 73367) :
--
ALTER TABLE ONLY run
    ADD CONSTRAINT "Refcar4"
    FOREIGN KEY (id_car) REFERENCES car(id_car);
--
-- Definition for index rent_pkey (OID = 73378) :
--
ALTER TABLE ONLY rent
    ADD CONSTRAINT rent_pkey
    PRIMARY KEY (id_run);
--
-- Definition for index Refrun3 (OID = 73380) :
--
ALTER TABLE ONLY rent
    ADD CONSTRAINT "Refrun3"
    FOREIGN KEY (id_run) REFERENCES run(id_run);
--
-- Comments
--
COMMENT ON SCHEMA public IS 'standard public schema';
