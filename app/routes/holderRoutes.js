const { Router } = require("express");
const { check } = require("express-validator");
const httpHolder = require("../controllers/holdercontroller");
const { helperHolder } = require("../helpers/helpersholder");
const { validarCampos } = require("../middleware/validar-datos");

const router = Router();

// GET: Listar todos
router.get("/", httpHolder.getListarTodos);

// GET: Listar por ID
router.get("/:id", [
  check("id", "Id no válido").isMongoId(),
  check("id", "No existe en la BD").custom(helperHolder.validarId),
  validarCampos
], httpHolder.getListarPorId);

// POST: Crear nuevo Holder
router.post("/", [
  check("email", "El email es obligatorio").notEmpty(),
  check("email", "El email debe ser único").custom(helperHolder.validarEmail),
  check("password", "La contraseña es obligatoria").notEmpty(),
  check("password", "Mínimo 8 caracteres").isLength({ min: 8 }),
  check("document", "El documento es obligatorio").notEmpty(),
  check("ficha", "Ficha debe ser un número").isNumeric(),
  validarCampos
], httpHolder.postHolder);

// PUT: Modificar Holder
router.put("/:id", [
  check("id", "Id no válido").isMongoId(),
  check("id", "No existe en la BD").custom(helperHolder.validarId),
  check("email", "El email es obligatorio").optional().notEmpty(),
  check("email", "El email debe ser único").optional().custom(helperHolder.validarEmail),
  check("password", "La contraseña debe tener mínimo 8 caracteres").optional().isLength({ min: 8 }),
  validarCampos
], httpHolder.putModificar);

// PUT: Activar Holder
router.put("/activate/:id", [
  check("id", "Id no válido").isMongoId(),
  check("id", "No existe en la BD").custom(helperHolder.validarId),
  validarCampos
], httpHolder.putActivar);

// PUT: Inactivar Holder
router.put("/unactivate/:id", [
  check("id", "Id no válido").isMongoId(),
  check("id", "No existe en la BD").custom(helperHolder.validarId),
  validarCampos
], httpHolder.putInactivar);

module.exports = router;
