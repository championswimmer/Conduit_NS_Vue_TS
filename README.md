# Conduit

> A Medium clone

## Usage

``` bash
# Install dependencies
npm install

# Build for production
tns build <platform> --bundle

# Build, watch for changes and debug the application
tns debug <platform> --bundle

# Build, watch for changes and run the application
tns run <platform> --bundle
```

## Take Care

### Cocoa Pods
You should have only `1.5.3` and not `1.6.0`.

### Swift Version
Upgrade to `"nativescript-toast": "^2.0.0",` as it uses Swift 4
