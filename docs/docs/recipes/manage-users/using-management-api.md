---
sidebar_label: Using Management API
sidebar_position: 2
---

# Manage users using Management API

[Management API](../../../docs/references/core/#management-api) is a set of APIs to access Logto data, including users.
:::info
[**Authentication**](../../../docs/references/core/#authentication) is REQUIRED when you're calling Management API.
:::

The user-related RESTful APIs are mounted at `/api/users` except the user activities, a.k.a. user logs `/api/logs?userId=:userId`.

What Admin Console can do, so do Management API.

| Admin Console - User Management                                                                                 | Management API                                                                                                                                       |
| :-------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| [List users](../../../docs/recipes/manage-users/using-admin-console#list-and-search-users)                      | <a href="/api/#tag/Users/paths/~1api~1users/get" target="_blank"> `GET /api/users`</a>                                                               |
| [View user profile](../../../docs/recipes/manage-users/using-admin-console#view-user-profile)                   | <a href="/api/#tag/Users/paths/~1api~1users~1:userId/get" target="_blank">`GET /api/users/:userId`</a>                                               |
| [View user activities](../../../docs/recipes/manage-users/using-admin-console#view-user-activities)             | <a href="/api/#tag/Logs/paths/~1api~1logs/get" target="_blank">`GET /api/logs?userId=:userId`</a>                                                    |
| [Add a user](../../../docs/recipes/manage-users/using-admin-console#add-user)                                   | <a href="/api/#tag/Users/paths/~1api~1users/post" target="_blank">`POST /api/users`</a>                                                              |
| [Update user profile](../../../docs/recipes/manage-users/using-admin-console#view-and-update-user-profile)      | <a href="/api/#tag/Users/paths/~1api~1users~1:userId/patch" target="_blank">`PATCH /api/users/:userId`</a>                                           |
| [Reset user password](../../../docs/recipes/manage-users/using-admin-console#reset-user-password)               | <a href="/api/#tag/Users/paths/~1api~1users~1:userId~1password/patch" target="_blank">`PATCH /api/users/:userId/password`</a>                        |
| [Delete a user](../../../docs/recipes/manage-users/using-admin-console#delete-user)                             | <a href="/api/#tag/Users/paths/~1api~1users~1:userId/delete" target="_blank">`DELETE /api/users/:userId`</a>                                         |
| [Remove social connection](../../../docs/recipes/manage-users/using-admin-console#view-and-update-user-profile) | <a href="/api/#tag/Users/paths/~1api~1users~1:userId~1identities~1:target/delete" target="_blank">`DELETE /api/users/:userId/identities/:target`</a> |

See [API Reference](/api/#tag/Users) for details.