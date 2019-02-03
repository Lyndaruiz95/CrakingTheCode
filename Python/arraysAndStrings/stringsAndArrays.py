import unittest


# Determine if a string has all unique characters
# not usuing aditional data structures
# nieve solution
# Time complexity: O(n^2)
# Space complexity: O(n)

def isUnique(str):
    stringlength = len(str)
    print(stringlength)
    if stringlength == 0 or stringlength == 1:
        return True



class MyTest(unittest.TestCase):
    def test(self):
        self.assertEqual(isUnique('a'), True)