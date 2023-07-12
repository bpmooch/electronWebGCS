## Rudimentary Electron GCS based on WebGCS and Electron React Boilerplate

# Highly Experimental, don't use with real vehicles

<br>

## Install

Clone the repo and install dependencies:

```bash
git clone --depth 1 --branch main https://github.com/PX4/electronwebgcs.git
cd electronwebgcs
npm i
```

**Having issues installing? See our [debugging guide](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/400)**

## Starting Development

Start the app in the `dev` environment:

```bash
npm start
```

you will need to run mavsdk_server on port 50000 for the app to connect.

for log download create a logs directory in the directory mavsdk server is running in

## Packaging for Production

To package apps for the local platform:

```bash
npm run package
```

## Maintainers

- [Daniel Honies](https://github.com/danielhonies)

## License

MIT
