# Forked from Khan Academy Exercises

Copyright (c) 2013 Khan Academy

The exercise framework is [MIT licensed](http://en.wikipedia.org/wiki/MIT_License).

The exercises are under a [Creative Commons by-nc-sa license](http://creativecommons.org/licenses/by-nc-sa/3.0/).

The additional sources added by xclams are [MIT licensed](http://en.wikipedia.org/wiki/MIT_License).

# Original Repository

For original information/readme of the Kahn-Exercise Framework please see:

[https://github.com/xclams/khan-exercises](https://github.com/xclams/khan-exercises)

# Why fork?

This fork was done, because we needed a possibility to integrate the Khan-Exercise Framework into the Curriki build
process. Since this is a maven powered process, we decided to handle this kind of dependency ("frontend dependency")
via the maven dependency mechanism.


# Usage

This module is a part of the Curriki build process. However you should be able to use it in any web
project with a maven powered build process.

## Build & Installation

To build the packages in the working directory run:

    cd khan-exercises
    mvn clean
    mvn package

To install the package into your local repository run:

    cd khan-exercises
    mvn clean
    mvn install

### Use as overlay (Maven WAR-Plugin)

You can use the content of this maven module in a maven project using the WAR-Plugin like that:

     <overlays>
          <overlay>
              <groupId>org.curriki</groupId>
              <artifactId>curriki-khan-exercises</artifactId> <!-- The version is taken from the <dependency> declaration, which is still required -->
              <type>jar</type>
              <targetPath>js/curriki-khan-exercises</targetPath> <!-- This is the path in the final webapp -->
          </overlay>
      </overlays>

