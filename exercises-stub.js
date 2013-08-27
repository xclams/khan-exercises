/**
 * Stub version of the Exercises object used in the live Khan Academy site.
 */
var Exercises = {
    localMode: true,

    khanExercisesUrlBase: "/xwiki/js/curriki-khan-exercise/",

    getCurrentFramework: function() {
        return "khan-exercises";
    },

    PerseusBridge: {
        cleanupProblem: function() {
            return false;
        }
    }
};
