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

## Add Github as repository to your app

If you don't want to build the package by your own, it is also possible to reference the artifacts directly from GitHub.
To achieve that you need to add the GitHub repository to the list of servers of your apps pom file.

    <repositories>
        <repository>
            <id>khan-exercises-mvn-repo</id>
            <url>https://raw.github.com/xclams/khan-exercises/mvn-repo/</url>
            <snapshots>
                <enabled>true</enabled>
                <updatePolicy>always</updatePolicy>
            </snapshots>
        </repository>
    </repositories>


## Use as overlay (Maven WAR-Plugin)

You can just add the packed form of this module to your applications dependencies:

      <dependency>
          <groupId>org.curriki</groupId>
          <artifactId>curriki-khan-exercises</artifactId>
          <version>1.0</version>
      </dependency>


You can use the content of this maven module in a maven project using the WAR-Plugin like that:

     <overlays>
          <overlay>
              <groupId>org.curriki</groupId>
              <artifactId>curriki-khan-exercises</artifactId> <!-- The version is taken from the <dependency> declaration, which is still required -->
              <type>jar</type>
              <targetPath>js/curriki-khan-exercises</targetPath> <!-- This is the path in the final webapp -->
          </overlay>
      </overlays>

This will copy the files defined in this modules output jar to your applications `target/js/curriki-khan-exercises


# Manual Build & Installation

To build the packages in the working directory run:

    cd khan-exercises
    mvn clean
    mvn package

To install the package into your local repository run:

    cd khan-exercises
    mvn clean
    mvn install


## Deployment
If you are a member of xclams organization you can deploy the artifacts of this module to the GitHub
repository automatically. To deploy the latest version to the repository (GitHub mvn-repo branch) run:

    cd khan-exercises
    mvn clean
    mvn deploy

Be careful, that this means that all older versions are not longer available. (Which is not a to big problem
since this repo was made to fulfill Currikis dependency needs.
