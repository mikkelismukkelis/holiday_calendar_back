const { Router } = require('express')
const { getTeams, getTeamIdByTitleId, addNewTeam } = require('../controllers/teams_controller')

const router = Router()

router.post('/getteamid', getTeamIdByTitleId)

router.post('/', addNewTeam)

router.get('/', getTeams)

module.exports = router
