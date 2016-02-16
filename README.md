# Starter template for BlueOak Server projects

You can [clone this repository][https-clone] or [download the zip file][dl-master] to get a head start on a new BlueOak Server-based project.

## Clone and customize example

Here are some steps you could take from a *nix shell to get the project and make it your own:

```sh
git clone --depth 1 git@github.com:BlueOakJS/blueoak-server-template.git my-new-project
cd my-new-project
rm -fr .git/
git init
```

At this point, you'll want to update the `package.json` file to change the **name**, **description**, **repository**, and (perhaps) **license** fields, e.g.:

```json
{
    "name": "my-new-project",
    "version": "1.0.0",
    "description": "Something for the weekend.",
		"repository": {
			"type": "git",
			"url": "git@github.com:seanpkps/my-new-project.git"
		},
    "license": "SEE LICENSE IN LICENSE",
    "scripts": {
        "start": "blueoak-server",
        "lint": "eslint --ignore-pattern node_modules **/*.js",
        "test": "mocha --check-leaks --globals services,__appDir test/unit; npm run lint"
    },
    "dependencies": {
        "blueoak-server": "^2.0.0",
        "request": "^2.51.0"
    },
    "devDependencies": {
        "eslint": "^1.10.3",
        "eslint-config-defaults": "^8.0.2",
        "mocha": "^2.3.4"
    }
}
```

Install the project dependencies with `npm install`, and then run the server with one of `npm start` or `nodemon`.

## More information

For details on using BlueOak Server, check out the [wiki][bos-wiki].

[bos-wiki]: https://github.com/BlueOakJS/blueoak-server/wiki
[dl-master]: https://github.com/BlueOakJS/blueoak-server-template/archive/master.zip
[https-clone]: https://github.com/BlueOakJS/blueoak-server-template.git
