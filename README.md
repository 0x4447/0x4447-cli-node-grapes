# 🍇 Grapes

This CLI tool was created after the incresing frustration while working on massive CloudFormation file. What AWS did is amazing, but working on one gigantic file is to labour intensive and prone to mistakes. That is why we decided to create  Grapes.

By braking down the whole CloudFormation file structure in to smaller chunks, it is much easier to reazon and work with.

We hope you'll find Grapes useful.

# How to Install

```
] sudo npm install -g @0x4447/grapes
```

# How to Use

```
] grapes -b -s .
```

# Where to get Help

```
] grapes -h
```

# What to Expect

### Build

Expect a `CloudFormation.json` file appear in the folder that you pointed using the `-s` parameter. The file will contain the final CloudFormation file that you can upload straight to AWS for deployment.

### Init

Expect a complete folder structure in the path that you specifie in the CLI. THe end result is the exact structure that Graps expects when building the final file. Do not change the folder name, while the file name is irrelevant. Make sure the files are proper JSON files.

# The End

If you enjoyed this project, please consider giving it a 🌟. And check out our [0x4447 GitHub account](https://github.com/0x4447), where we have additional resources that you might find useful or interesting.

# For Hire 👨‍💻 👩‍💻

If you'd like us to help you with something, please feel free to say [hello@0x4447.email](mailto:hello@0x4447.email?Subject=Hello%20From%20Repo&Body=Hi%2C%0A%0AMy%20name%20is%20NAME%2C%20and%20I%27d%20like%20to%20get%20in%20touch%20with%20someone%20at%200x4447.%0A%0AI%27d%20like%20to%20discuss%20the%20following%20topics%3A%0A%0A-%20LIST_OF_TOPICS_TO_DISCUSS%0A%0ASome%20useful%20information%3A%0A%0A-%20My%20full%20name%20is%3A%20FIRST_NAME%20LAST_NAME%0A-%20My%20time%20zone%20is%3A%20TIME_ZONE%0A-%20My%20working%20hours%20are%20from%3A%20TIME%20till%20TIME%0A-%20My%20company%20name%20is%3A%20COMPANY%20NAME%0A-%20My%20company%20website%20is%3A%20https%3A%2F%2F%0A%0ABest%20regards.), and share what's on your mind. We'll take a look, and try our best to help you. Or visit our website at: [0x4447.com](https://0x4447.com).
