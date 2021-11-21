// Item queries
const getAllItems = 'SELECT * FROM items WITH (NOLOCK)'
const addNewItem = 'INSERT INTO items ([group], title, start_time, end_time) VALUES (@group, @title, @start_time, @end_time)'
const deleteItemById = 'DELETE FROM items WHERE id = @id'
const replaceItemById = 'UPDATE items SET [group] = @group, title = @title, start_time = @start_time, end_time = @end_time WHERE id = @id'

// User (= group) queries
const getAllUsers = 'SELECT id, title, group_id FROM users WITH (NOLOCK) ORDER BY title'
const getUserById = 'SELECT * FROM users WITH (NOLOCK) WHERE id = @id'
const checkUserCountByName = 'SELECT COUNT(*) as count FROM users WITH (NOLOCK) WHERE title = @title'
const checkUserCountByNameAndGroup = 'SELECT COUNT(*) as count FROM users WITH (NOLOCK) WHERE title = @title AND group_id = @group_id'
const addNewUser = 'INSERT INTO users (group_id, title) VALUES (@group_id, @title)'

// Team queries
const getAllTeams = 'SELECT * FROM teams WITH (NOLOCK) ORDER BY title'
const getTeamIdByTitleId = 'SELECT id FROM teams WITH (NOLOCK) WHERE title_id = @teamTitleId'
const addNewTeam = 'INSERT INTO teams (title, title_id) VALUES (@title, @title_id)'
const checkTeamCountByTitleId = 'SELECT COUNT(*) as count FROM teams WITH (NOLOCK) WHERE title_id = @title_id'

// EXPORTS
// Items
exports.getAllItems = getAllItems
exports.addNewItem = addNewItem
exports.deleteItemById = deleteItemById
exports.replaceItemById = replaceItemById
// Users
exports.getAllUsers = getAllUsers
exports.getUserById = getUserById
exports.checkUserCountByName = checkUserCountByName
exports.checkUserCountByNameAndGroup = checkUserCountByNameAndGroup
exports.addNewUser = addNewUser
// Team
exports.getAllTeams = getAllTeams
exports.getTeamIdByTitleId = getTeamIdByTitleId
exports.addNewTeam = addNewTeam
exports.checkTeamCountByTitleId = checkTeamCountByTitleId
