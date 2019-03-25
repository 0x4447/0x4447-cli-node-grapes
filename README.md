# 🍇 Grapes

The Grapes CLI tool was created after we experienced increasing frustration as we worked with massive CloudFormation files. We're amazed by what AWS CloudFormation can do and the way it helps with managing the AWS infrastructure, but working with one gigantic file is too labor intensive and prone to countless errors and endless frustration.

We decided to do something about this. The end result is Grapes, a simple CLI tool that cuts the amount of time spent creating a stack in half. It makes the entire process more enjoyable, in addition to making it easy to organize and extend.

Grapes enables you to break down the entire CloudFormation file structure into smaller chunks so it becomes much easier to reason about it. You can literally organize the folder structure in any way that makes sense to you – no constraints.

We use Grapes almost every day, and we hope you will too.

# Examples

- [0x4447-product-s3-email](https://github.com/0x4447/0x4447-product-s3-email)
- [0x4447-product-vpn-contained-IPSec-basic](https://github.com/0x4447/0x4447-product-vpn-contained-IPSec-basic)

# How to Install

```
] sudo npm install -g @0x4447/grapes
```

# How to Use

```
] grapes -s PATH_TO_FOLDER
```

# Where to get Help

```
] grapes -h
```

# What to expect

### The build feature

Every time you run the command, a `CloudFormation.json` file appears in the folder you pointed to using the `-s` parameter. The file contains the final CloudFormation file, which you can then upload straight to AWS for deployment. This file is overwritten every time you run Grapes.

### The init feature

The initialization command creates a complete folder structure in the path you specified. The end result is the exact structure that Grapes expects when building the final file. The only requirement for the tool is that you never change the root folder names. Anything inside those folders is up to you. You can name your files anything you like and organize them in whatever folder structure makes sense to you.

# The End

If you enjoyed this project, please consider giving it a 🌟. And check out our [0x4447 GitHub account](https://github.com/0x4447), where you'll find additional resources you might find useful or interesting.

## Sponsor 🎊

This project is brought to you by 0x4447 LLC, a software company specializing in building custom solutions on top of AWS. Follow this link to learn more: https://0x4447.com. Alternatively, send an email to [hello@0x4447.email](mailto:hello@0x4447.email?Subject=Hello%20From%20Repo&Body=Hi%2C%0A%0AMy%20name%20is%20NAME%2C%20and%20I%27d%20like%20to%20get%20in%20touch%20with%20someone%20at%200x4447.%0A%0AI%27d%20like%20to%20discuss%20the%20following%20topics%3A%0A%0A-%20LIST_OF_TOPICS_TO_DISCUSS%0A%0ASome%20useful%20information%3A%0A%0A-%20My%20full%20name%20is%3A%20FIRST_NAME%20LAST_NAME%0A-%20My%20time%20zone%20is%3A%20TIME_ZONE%0A-%20My%20working%20hours%20are%20from%3A%20TIME%20till%20TIME%0A-%20My%20company%20name%20is%3A%20COMPANY%20NAME%0A-%20My%20company%20website%20is%3A%20https%3A%2F%2F%0A%0ABest%20regards.).
