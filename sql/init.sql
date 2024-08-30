CREATE TABLE empresa_db.public.funcionario
(
    uuid serial PRIMARY KEY NOT NULL,
    nome character varying(255) COLLATE pg_catalog."default" NOT NULL,
    endereco character varying(255) COLLATE pg_catalog."default" NOT NULL,
    bairro character varying(255) COLLATE pg_catalog."default",
    cep character varying(255) COLLATE pg_catalog."default",
    telefone character varying(11) COLLATE pg_catalog."default",
    salario numeric NOT NULL,
    data_contrato date NOT NULL,
    funcao character varying(255) COLLATE pg_catalog."default" NOT NULL
)