const { Router } = require("express");
const { check } = require("express-validator");
const entryController = require("../controllers/entrycontroller");
const { helperEntry } = require("../helpers/entryhelpers"); // Crea este helper similar al de los demás
const { validarCampos } = require("../middleware/validar-datos");

const router = Router();

// POST: Crear nueva entrada
router.post("/", [
  check("laptop", "El ID de la laptop es obligatorio").isMongoId(),
  check("laptop", "La laptop debe existir en la BD").custom(helperEntry.validarLaptop),
  validarCampos
], entryController.postEntry);

// GET: Listar entradas por Holder
router.get("/holder/:id", [
  check("id", "Id no válido").isMongoId(),
  check("id", "No existe en la BD").custom(helperEntry.validarHolder), // Asegúrate de implementar esta validación
  validarCampos
], entryController.getListarPorHolder);

// GET: Listar entradas por día
router.get("/dia", entryController.getListarPorDia);

// GET: Listar entradas entre fechas
router.get("/fechas", [
  check("startDate", "La fecha de inicio es obligatoria").notEmpty(),
  check("endDate", "La fecha de fin es obligatoria").notEmpty(),
  validarCampos
], entryController.getListarEntreFechas);

// PUT: Registrar salida
router.put("/salida/:id", [
  check("id", "Id no válido").isMongoId(),
  check("id", "No existe en la BD").custom(helperEntry.validarId),
  validarCampos
], entryController.putRegistrarSalida);

module.exports = router;
